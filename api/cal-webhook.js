// POST /api/cal-webhook - recibe webhooks de Cal.com y guarda bookings en Supabase.
// Env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, CAL_WEBHOOK_SECRET.

import crypto from 'node:crypto';

function timingSafeEqualStr(a, b) {
  const ab = Buffer.from(String(a || ''), 'utf8');
  const bb = Buffer.from(String(b || ''), 'utf8');
  return ab.length === bb.length && crypto.timingSafeEqual(ab, bb);
}

function verifySecret(req) {
  const expected = process.env.CAL_WEBHOOK_SECRET;
  if (!expected) return false;
  const headerSecret =
    req.headers['x-cal-webhook-secret'] ||
    req.headers['x-webhook-secret'] ||
    req.headers['authorization']?.replace(/^Bearer\s+/i, '');
  const querySecret = req.query?.secret;
  return timingSafeEqualStr(headerSecret, expected) || timingSafeEqualStr(querySecret, expected);
}

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body); } catch { return {}; }
  }
  return req.body;
}

function firstValue(v) {
  if (v == null) return null;
  if (typeof v === 'object' && 'value' in v) return v.value;
  return v;
}

function asIso(v) {
  if (!v) return null;
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

function statusFromEvent(eventType) {
  const e = String(eventType || '').toUpperCase();
  if (e.includes('CANCEL')) return 'cancelled';
  if (e.includes('RESCHEDULE')) return 'rescheduled';
  if (e.includes('REJECT')) return 'rejected';
  return 'scheduled';
}

function normalizeCalPayload(body) {
  const payload = body.payload || body.data || body;
  const eventType = body.triggerEvent || body.eventType || body.event || body.type || payload.eventType || null;
  const attendee = payload.attendees?.[0] || payload.attendee || {};
  const responses = payload.responses || {};
  const eventTypeObj = payload.eventType || payload.event_type || {};
  const rawUid = payload.uid || payload.bookingUid || payload.booking_uid || payload.id || body.id;
  const fallbackUid = crypto.createHash('sha256').update(JSON.stringify(body)).digest('hex');
  const title = payload.title || payload.eventTitle || eventTypeObj.title || payload.meetingTitle || null;

  return {
    event_uid: String(rawUid || fallbackUid),
    created_at: asIso(payload.createdAt || payload.created_at || body.createdAt),
    updated_at: new Date().toISOString(),
    event_type: eventType,
    status: statusFromEvent(eventType),
    event_type_slug: eventTypeObj.slug || payload.eventTypeSlug || payload.event_type_slug || null,
    title,
    start_time: asIso(payload.startTime || payload.start_time || payload.start),
    end_time: asIso(payload.endTime || payload.end_time || payload.end),
    attendee_name: firstValue(responses.name) || attendee.name || payload.name || null,
    attendee_email: firstValue(responses.email) || attendee.email || payload.email || null,
    attendee_phone: firstValue(responses.phone) || firstValue(responses.phoneNumber) || attendee.phoneNumber || attendee.phone || null,
    payload: body,
  };
}

async function upsertBooking(row) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { configured: false };

  const r = await fetch(`${url}/rest/v1/cal_bookings?on_conflict=event_uid`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'content-type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(row),
  });
  return { configured: true, ok: r.ok, status: r.status, text: r.ok ? '' : await r.text() };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }
  if (!verifySecret(req)) return res.status(401).json({ error: 'unauthorized' });

  const row = normalizeCalPayload(parseBody(req));
  const saved = await upsertBooking(row);
  if (!saved.configured) return res.status(500).json({ error: 'supabase_not_configured' });
  if (!saved.ok) return res.status(502).json({ error: 'supabase_write_failed', status: saved.status });

  return res.status(200).json({ ok: true });
}

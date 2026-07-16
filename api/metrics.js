// GET /api/metrics - capa de proyeccion del dashboard (Node serverless runtime).
// Un solo endpoint, muchos adaptadores. Cada fuente reporta status honesto (live | pending).
// Un dato sin conector es null (la UI lo pinta como en-dash), nunca un 0 falso.
// Env: SUPABASE_URL, SUPABASE_ANON_KEY, SESSION_SECRET.

import crypto from 'node:crypto';

const COOKIE_NAME = 'dash_session';

function verifySession(cookieHeader) {
  const secret = process.env.SESSION_SECRET;
  if (!secret) return false;
  const match = (cookieHeader || '').split(';').map(s => s.trim())
    .find(s => s.startsWith(COOKIE_NAME + '='));
  if (!match) return false;
  const value = decodeURIComponent(match.slice(COOKIE_NAME.length + 1));
  const [exp, sig] = value.split('.');
  if (!exp || !sig) return false;
  if (Date.now() > Number(exp)) return false;
  const expected = crypto.createHmac('sha256', secret).update(String(exp)).digest('hex');
  const a = Buffer.from(sig, 'utf8'), b = Buffer.from(expected, 'utf8');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

// Adaptador: funnel del quiz desde Supabase (RPC SECURITY DEFINER, agregados).
async function fetchQuizFunnel() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return { configured: false };
  try {
    const r = await fetch(`${url}/rest/v1/rpc/dashboard_funnel_metrics`, {
      method: 'POST',
      headers: { apikey: key, Authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: '{}',
    });
    if (!r.ok) return { configured: true, error: 'rpc_failed' };
    return { configured: true, data: await r.json() };
  } catch {
    return { configured: true, error: 'fetch_failed' };
  }
}

export default async function handler(req, res) {
  if (!verifySession(req.headers.cookie)) {
    return res.status(401).json({ error: 'unauthorized' });
  }

  const [quiz] = await Promise.all([fetchQuizFunnel()]);
  const funnelLive = quiz.configured && !quiz.error;
  const f = funnelLive ? (quiz.data || {}) : {};

  res.setHeader('cache-control', 'private, max-age=60');
  return res.status(200).json({
    updated_at: (funnelLive && f.latest) ? f.latest : new Date().toISOString(),
    funnel: {
      total:       funnelLive ? (f.total ?? 0) : null,
      by_banda:    funnelLive ? (f.by_banda ?? {}) : null,
      by_segmento: funnelLive ? (f.by_segmento ?? {}) : null,
      by_lang:     funnelLive ? (f.by_lang ?? {}) : null,
      by_fuente:   funnelLive ? (f.by_fuente ?? {}) : null,
      daily:       funnelLive ? (f.daily ?? []) : null,
    },
    // Adaptadores pendientes: no llamamos a nadie todavia, reportamos null + pending.
    emails: null,
    bookings: null,
    sources: {
      funnel: funnelLive
        ? { status: 'live', note: 'Supabase RPC · dashboard_funnel_metrics · live' }
        : { status: 'pending', note: 'Falta SUPABASE_URL / SUPABASE_ANON_KEY o desplegar la RPC' },
      emails:   { status: 'pending', note: 'Kit · webhooks sin wirear (forms 9611887 / 9610315)' },
      bookings: { status: 'pending', note: 'Cal.com · webhook sin wirear (oscargmc/consulta)' },
    },
  });
}

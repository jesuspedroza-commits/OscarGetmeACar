-- Captura de bookings de Cal.com para el dashboard.
-- La tabla guarda payload crudo para auditoria, pero el dashboard solo expone agregados.
create table if not exists public.cal_bookings (
  event_uid text primary key,
  received_at timestamptz not null default now(),
  created_at timestamptz,
  updated_at timestamptz not null default now(),
  event_type text,
  status text not null default 'scheduled',
  event_type_slug text,
  title text,
  start_time timestamptz,
  end_time timestamptz,
  attendee_name text,
  attendee_email text,
  attendee_phone text,
  payload jsonb not null default '{}'::jsonb
);

alter table public.cal_bookings enable row level security;

-- Sin policies: el cliente anon no puede leer ni escribir bookings.
-- El webhook escribe server-side con service_role.

create or replace function public.dashboard_funnel_metrics()
returns json
language sql
security definer
set search_path = public
stable
as $$
  select json_build_object(
    'total', (select count(*) from quiz_leads),
    'by_banda', (select coalesce(json_object_agg(k, c), '{}'::json) from (
        select coalesce(banda, '(sin banda)') as k, count(*) c from quiz_leads group by 1 order by 1) t),
    'by_segmento', (select coalesce(json_object_agg(k, c), '{}'::json) from (
        select coalesce(segmento, '(sin segmento)') as k, count(*) c from quiz_leads group by 1 order by 1) t),
    'by_lang', (select coalesce(json_object_agg(k, c), '{}'::json) from (
        select coalesce(lang, '(sin idioma)') as k, count(*) c from quiz_leads group by 1 order by 1) t),
    'by_fuente', (select coalesce(json_object_agg(k, c), '{}'::json) from (
        select coalesce(fuente, '(sin fuente)') as k, count(*) c from quiz_leads group by 1 order by 1) t),
    'daily', (select coalesce(json_agg(json_build_object('fecha', d, 'count', c) order by d), '[]'::json) from (
        select created_at::date as d, count(*) c from quiz_leads
        where created_at >= (now() - interval '30 days') group by 1) t),
    'bookings', json_build_object(
      'total', (select count(*) from cal_bookings where status = 'scheduled'),
      'by_status', (select coalesce(json_object_agg(k, c), '{}'::json) from (
          select coalesce(status, '(sin status)') as k, count(*) c from cal_bookings group by 1 order by 1) t),
      'daily', (select coalesce(json_agg(json_build_object('fecha', d, 'count', c) order by d), '[]'::json) from (
          select start_time::date as d, count(*) c from cal_bookings
          where start_time >= (now() - interval '30 days') and status = 'scheduled'
          group by 1) t),
      'latest', (select max(coalesce(start_time, created_at, received_at)) from cal_bookings)
    ),
    'latest', greatest(
      coalesce((select max(created_at) from quiz_leads), 'epoch'::timestamptz),
      coalesce((select max(coalesce(start_time, created_at, received_at)) from cal_bookings), 'epoch'::timestamptz)
    )
  );
$$;

revoke all on function public.dashboard_funnel_metrics() from public;
grant execute on function public.dashboard_funnel_metrics() to anon, authenticated, service_role;

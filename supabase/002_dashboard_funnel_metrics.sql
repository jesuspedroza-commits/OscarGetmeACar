-- Agregados del funnel del quiz para el dashboard.
-- SECURITY DEFINER: corre como el owner y saltea RLS, pero solo devuelve conteos
-- (nunca filas crudas), asi el anon key puede leer metricas sin acceso a la tabla.
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
    'latest', (select max(created_at) from quiz_leads)
  );
$$;

revoke all on function public.dashboard_funnel_metrics() from public;
grant execute on function public.dashboard_funnel_metrics() to anon, authenticated, service_role;

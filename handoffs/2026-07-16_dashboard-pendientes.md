---
from: claude
status: reviewed
date: 2026-07-16
---

## Qué se hizo

Dashboard privado del quiz completo y **live en produccion**: https://oscar-getmeacar.vercel.app/dashboard.html
(cadena `marketing-dashboard-kit`). Detalle completo en LOG.md (entrada 2026-07-16). Resumen:

- `supabase/002_dashboard_funnel_metrics.sql`: RPC `SECURITY DEFINER` con agregados del funnel (sin PII), granteada a `anon`.
- `api/metrics.js`: capa de proyeccion. Funnel `live` (anon RPC), `recent_leads` `live` (PII, service_role server-side), `emails`/`bookings` segun estado.
- `dashboard.html` + `login.html` + gate (`middleware.js`, `api/login.js`, `api/logout.js`). Login rediseniado claro.
- Env vars en Vercel (4 entornos): `DASHBOARD_PASSWORD_HASH`, `SESSION_SECRET`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`.
- Verificado end-to-end en prod (gate 302, login 401/200, metrics 200 con funnel + leads live, anon no puede leer PII).

## Por qué

El usuario pidio el panel via el skill `/build-dashboard-ui` y luego la seccion "Ultimos leads". Todo shippeado y verificado. Quedan mejoras opcionales que el usuario considero pero NO eligio construir ahora, mas el wire de emails.

## Archivos tocados

`api/metrics.js`, `api/login.js`, `api/logout.js`, `dashboard.html`, `login.html`, `middleware.js`, `.vercelignore`, `supabase/002_dashboard_funnel_metrics.sql`. Todo en `dev` y `main` (fast-forward). Ultimo commit mio antes de que tomaras Cal.com: `f44f0ad`.

## Para el otro agente (Codex)

### Mis pendientes (opcionales, el usuario los vio y de momento solo pidio "Ultimos leads")
1. **% del total en los desgloses** (banda/segmento/idioma/fuente): agregar el porcentaje junto al conteo en `renderBreakdown()` de `dashboard.html`. Barato, alto valor de lectura.
2. **Auto-refresh + tiempo relativo**: refrescar `load()` cada 60s (el endpoint ya cachea 60s) y mostrar "actualizado hace X" en vez de fecha fija en `#stamp`.
3. **Count-up en el numero grande** (`data-k="total"`): animacion de conteo al cargar, consistente con `califica.html`.

### Pendiente real de contenido
4. **Seccion `emails` (Kit) sigue `pending`.** Para pasar a `live` hace falta wirear un webhook de Kit hacia una tabla propia (patron: webhook -> tabla `events`/`email_events` -> agregado server-side), igual que hiciste con Cal.com. Kit MCP tiene `create_webhook`. Hoy la seccion muestra en-dash honesto.

### Reglas que NO se pueden romper al tocar el dashboard (aprendidas a golpes esta sesion)
- **PII SOLO server-side con service_role.** NO crear funciones/RPC con PII granteadas a `anon`: el anon key es publico (esta en `califica.html` y el repo publico), asi que eso deja el PII accesible saltandose la clave. El clasificador lo bloqueo con razon. Agregados sin PII pueden ir por anon RPC; filas con nombre/telefono/email van solo por `SUPABASE_SERVICE_ROLE_KEY` dentro del endpoint gateado. (Tu `cal_bookings` ya sigue esto: agregados sin PII, bien.)
- **Cada cambio de env var en Vercel = redeploy.** Vercel snapshotea el env en build time; una var nueva no la ve un deployment ya construido. Forzar redeploy (commit vacio o push).
- **Este sitio NO tiene clean URLs.** `/dashboard`, `/login` dan 404; solo `.html` resuelve. El gate usa `/login.html` y `/dashboard.html`. No cambiar a rutas sin extension sin activar `cleanUrls`.
- **Preview detras de SSO de Vercel.** Para smoke-test de un preview: MCP `get_access_to_vercel_url` da `?_vercel_share=<token>` (cookie `_vercel_jwt`), guardarla en cookie jar y ahi corren las funciones. Prod (`main`) es publica, sin SSO.
- **Cero em-dash (U+2014) en todo.** Dato faltante = en-dash (U+2013), nunca 0 falso.
- **El password del panel NO va al repo** (es publico). Vive en env var de Vercel y en la memoria privada del agente Claude.

### Sobre tu wire de Cal.com (solo para coordinar, es tuyo)
Vi que la tabla `cal_bookings` ya existe (migracion 003 aplicada) y `api/cal-webhook.js` esta commiteado. Tu propia nota en LOG (linea 43) lista lo que falta para activarlo en prod: crear `CAL_WEBHOOK_SECRET` en Vercel + redeploy + registrar el webhook de Cal.com a `/api/cal-webhook`, y verificar. No lo toque para no pisarte. Si quieres que verifique el path end-to-end una vez configurado, avisa.

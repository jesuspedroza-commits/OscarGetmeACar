# LOG

Bitácora de cambios estructurales y de protocolo de este proyecto (no actividad normal de campaña, eso vive en campaign-map.md).

## 2026-06-14
- Setup: agregado LOG.md, AGENTS.md y handoffs/ para coordinación con Codex.

## 2026-06-25
- Infraestructura nueva: proyecto Supabase (`iwtzzusjuaymmixsvevx`, org zystfagnvpmlgfwcdmvk) conectado vía MCP (`claude mcp add --transport http supabase`). OAuth, sin PAT manual.
- Tabla `quiz_leads` (SQL en `supabase/001_quiz_leads.sql`): guarda cada respuesta del quiz de `califica.html` (contacto + banda + segmento + pago estimado + las 6 respuestas en `respuestas` jsonb). RLS activado, policy de solo INSERT para `anon`, sin SELECT/UPDATE/DELETE desde el cliente.
- `califica.html` ahora manda cada submit a 3 destinos en paralelo: Kit (captura de lead), Supabase (dato crudo), y dispara el correo de resultado (ver abajo). Mismo flujo, sin tocar Supabase, si se vuelve a cambiar el form de Kit.
- Kit: form dedicado para el quiz creado (`9611887`, "Captura2-calculadora-quiz"), separado del form de captura del modal landing (`9610315`, "Captura1-auto-opt"). Custom field nuevo: `rango_vehiculo` (no usado todavía en el insert, queda disponible).
- Envío del resultado por correo NO se hizo con Kit (las Visual Automations que conectan form -> secuencia son de pago). Se resolvió 100% gratis con Supabase + Resend:
  - Database Webhook en Supabase (`Database > Webhooks`, no vía API/MCP) dispara en cada INSERT a `quiz_leads`.
  - Edge Function `send-quiz-result` (Deno, desplegada vía MCP `deploy_edge_function`) recibe el webhook, recalcula banda/segmento/rango de vehículo en servidor (sin nuevas columnas) y manda el correo bilingüe (usa la columna `lang`) vía Resend API.
  - Secret `RESEND_API_KEY` vive en Supabase (`Project Settings > Edge Functions > Secrets`), nunca pasó por el chat.
  - Dominio `oscargetmeacar.website` (Namecheap) verificado en Resend (SPF + DKIM + DMARC, registros TXT/MX en sub-hosts `send` y `resend._domainkey`, sin necesidad de buzón de correo). Envía desde `resultados@oscargetmeacar.website`. Verificado end-to-end: insert -> webhook -> function (200) -> Resend -> Gmail real.
  - Gotcha: el dominio sandbox de Resend (`onboarding@resend.dev`) solo entrega al correo de la cuenta registrada, no a destinatarios reales. Hace falta dominio propio verificado para producción aunque sea plan gratis.
- UI: paso de opt-in (captura de email) ahora tiene efecto "glass" (`#optin.glass-step`, `backdrop-filter: blur`) flotando sobre el resultado ya pintado de fondo (`paintResult()` separado de `renderResult()` para pintar sin cambiar de pantalla).
- Favicon agregado (`favicon.ico` + pngs en `assets/`) generado con Python/Pillow centrando `logo-symbol-transparent.png` en lienzo cuadrado, sin recorte. Linkeado en `index.html` y `califica.html`.
- Flujo de git nuevo para este proyecto: rama `dev` para cambios antes de producción. Vercel ya tiene alias fijo por rama: `oscar-getmeacar-git-dev-agenc-ia1.vercel.app`, se actualiza solo con cada push a `dev`.
- Gotcha de sesión: las MCP tools de un servidor agregado a media sesión (`claude mcp add`) no aparecen hasta usar `ToolSearch` (o reiniciar Claude Code); el servidor puede mostrar "Connected" en `claude mcp list` sin que sus tools estén cargadas todavía.

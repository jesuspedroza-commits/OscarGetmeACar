create table if not exists quiz_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  name text,
  phone text,
  lang text,
  banda text,
  segmento text,
  pago_estimado text,
  fuente text default 'quiz',
  respuestas jsonb not null default '{}'::jsonb
);

alter table quiz_leads enable row level security;

create policy "anon can insert quiz leads"
  on quiz_leads
  for insert
  to anon
  with check (true);

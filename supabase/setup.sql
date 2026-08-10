-- TFHN / Chrysalis lead catalogue — run once in the Supabase SQL editor.
-- One table for every contact-form submission; provider-match fields are
-- nullable and only filled when the lead is a hiring practice or a provider.

create table if not exists leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  first_name  text not null,
  last_name   text not null,
  email       text not null,
  interest_area text not null,
  message     text,
  -- provider-match details
  discipline  text,   -- e.g. chiropody, physio, dental hygiene
  province    text,
  work_type   text    -- full-time | part-time | independent contract | locum
);

alter table leads enable row level security;

-- The public site may INSERT leads but never read, change, or delete them.
create policy "public can insert leads"
  on leads for insert
  to anon
  with check (true);

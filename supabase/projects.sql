create extension if not exists "pgcrypto";

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  image_url text,
  tech_stack text[],
  category text,
  status text,
  live_url text,
  github_url text,
  metric text,
  featured boolean default false,
  created_at timestamp with time zone default now()
);

create extension if not exists "pgcrypto";

create table if not exists public.experiences (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  company_name text not null,
  icon_bg text default '#333333',
  start_date date,
  end_date date,
  date_label text not null,
  sort_order integer default 0,
  current boolean default false,
  created_at timestamp with time zone default now()
);

alter table public.experiences enable row level security;

create unique index if not exists experiences_seed_identity_idx
  on public.experiences (title, company_name, date_label);

drop policy if exists "Allow public read access to experiences" on public.experiences;

create policy "Allow public read access to experiences"
  on public.experiences
  for select
  to anon
  using (true);

insert into public.experiences (
  title,
  company_name,
  icon_bg,
  start_date,
  end_date,
  date_label,
  sort_order,
  current
)
values
  (
    'Front-End Developer',
    'MMS IT',
    '#333333',
    '2021-05-01',
    '2022-01-01',
    'May 2021 - Jan 2022',
    1,
    false
  ),
  (
    'Back-End Developer',
    'Fairway Technology',
    '#333333',
    '2022-01-01',
    '2022-05-01',
    'Jan 2022 - May 2022',
    2,
    false
  ),
  (
    'Junior Web Developer',
    'aluto-benli',
    '#333333',
    '2022-05-01',
    '2023-10-01',
    'May 2022 - Oct 2023',
    3,
    false
  ),
  (
    'Mid-Level Full Stack Developer',
    'Freelancer',
    '#333333',
    '2023-10-01',
    null,
    'Oct 2023 - Present',
    4,
    true
  )
on conflict (title, company_name, date_label) do nothing;

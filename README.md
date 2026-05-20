# Samsouta Portfolio

A dark-first personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Add your Supabase credentials to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Supabase

1. Create a Supabase project.
2. Open the SQL Editor.
3. Run `supabase/projects.sql`.
4. Restart the dev server.

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

## Project Data

Projects are loaded from the `projects` table in Supabase. Local SVG files in
`public/projects` are used as lightweight placeholder screenshots.

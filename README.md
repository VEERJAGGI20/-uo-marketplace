# UO Marketplace

A custom marketplace frontend for The Unstable Origins network.

## Phase 1
This repository currently contains the cinematic React + Vite frontend foundation. Product data, authentication, creator submissions, downloads, and administration will be added in later phases.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deployment
Connect this GitHub repository to Cloudflare Pages:
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`

## Environment variables
Copy `.env.example` to `.env.local` when Supabase is introduced in Phase 2.

Never place a Supabase service-role key in frontend code or any `VITE_` variable.

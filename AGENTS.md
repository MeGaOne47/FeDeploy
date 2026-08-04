# AGENTS

## Project overview
- This is a Next.js 14 project using the App Router, React 18, TypeScript, Tailwind CSS, Ant Design, and client-side theming via `next-themes`.
- The project is structured with `app/` for routes and `components/` for reusable UI pieces.
- The TypeScript alias `@/*` maps to the project root.

## Build and development commands
- `npm run dev` or `bun dev` — start local development server
- `npm run build` — compile production build
- `npm run start` — run production server
- `npm run lint` — run Next.js linting

## Architecture and conventions
- Main route content lives in `app/page.tsx` and individual route folders under `app/`.
- Shared page chrome is implemented in `components/Layout/AppShell.tsx`.
- Global providers are assembled in `components/Layout/AppProviders.tsx`.
- Site metadata, navigation, shellless-route settings, and content arrays are centralized in `app/site-config.ts`.
- `SHELLLESS_ROUTES` defines routes that render without header/footer chrome.
- UI components are organized into subfolders under `components/` by feature.
- Use absolute imports with `@/` to access app files.

## Important patterns
- Avoid adding server-only logic in client components marked with `"use client"`.
- Preserve the existing app shell and theme provider when changing page layout or route structure.
- Keep site content and route metadata in `app/site-config.ts` rather than scattering it across pages.

## Guidance for AI agents
- Focus edits on `app/` for route and page changes, and `components/` for UI logic.
- Use `app/site-config.ts` as the source of truth for site metadata, navigation, and feature flags.
- When creating new pages, add `page.tsx` inside the new route folder under `app/`.
- Maintain Tailwind and Next.js conventions; this project uses the standard Next.js app router with `metadata` exported from `app/site-config.ts`.

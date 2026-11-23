# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website for Maykon Felix, deployed at https://maykon.vercel.app/. Single page based on the "Portfolio-Agente" design (Claude Design canvas): dark/light themes, PT/EN/ES, and a simulated RAG agent that answers questions about the résumé.

## Commands

All commands run from the `Portifolio/` subdirectory:

```bash
cd Portifolio
npm run dev        # Next.js dev server (Turbopack)
npm run build      # Production build (type-checks)
npm run start      # Serve the production build
npm run lint       # ESLint
```

There are no tests configured.

## Stack

Next.js 16 (App Router, `cacheComponents` on), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (style `base-nova`, built on Base UI — not Radix), lucide-react, next-themes.

Next 16 differs from older versions: read `Portifolio/node_modules/next/dist/docs/` before using unfamiliar APIs (see `Portifolio/AGENTS.md`).

## Architecture

- `src/app/layout.tsx` — fonts (Inter, Space Grotesk, JetBrains Mono via `next/font`), metadata, `ThemeProvider` + `I18nProvider`.
- `src/app/page.tsx` — composes `ScrollProgress`, `SiteHeader` and the sections.
- `src/components/sections.tsx` — Hero, Pipeline, Stack, Career, Projects, Contact.
- `src/components/agent-chat.tsx` — the agent card (pipeline steps + streamed answer). Remounted with `key={lang}`.
- `src/components/project-card.tsx` — project card + shadcn `Dialog` with details.
- `src/components/i18n-provider.tsx` — language store (`useSyncExternalStore`, `localStorage` key `mf-lang`, falls back to `navigator.language`).
- `src/lib/content.ts` — **all copy** in PT/EN/ES (`Dict` type is inferred from `pt`; `en`/`es` must match it).
- `src/components/ui/` — shadcn components (add more with `npx shadcn@latest add <name>`).

## Styling

Design tokens live in `src/app/globals.css`: light values on `:root`, dark on `.dark` (dark is the default theme; next-themes stores it as `mf-theme`). Custom Tailwind colors: `bg2`, `inset`, `chip`, `bubble`, `line`/`line2`/`line3`, `head`, `soft`, `dim`, `dot`, `hdr`, `brand` (`#C8F169`), `brand-text` (darker green in light mode for contrast), `brand-ink`. shadcn tokens (`primary`, `card`, `border`, …) are mapped onto them.

Images are in `public/images/`.

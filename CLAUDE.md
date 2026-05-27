# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website for Maykon Felix, deployed at https://maykon.vercel.app/. Built with React + TypeScript + Vite.

## Commands

All commands run from the `Portifolio/` subdirectory:

```bash
cd Portifolio
npm run dev        # Start development server (Vite)
npm run build      # Type-check + production build (tsc && vite build)
npm run preview    # Preview production build locally
```

There are no test or lint scripts configured.

## Architecture

**Stack:** React 18, TypeScript, Vite, Material-UI (MUI), Framer Motion, React Router v6.

**Source root:** `Portifolio/src/`

**Routing** (`src/routes/index.tsx`) — all routes are wrapped in a `Layout` component that injects `Header`, `FooterNew`, and `WhatsApp` around an `Outlet`:
- `/` → Home
- `/particle` → Particle effects showcase
- `/playground` → Interactive playground
- `/framerMotion` → Framer Motion animation demos

**Layout** (`src/shared/layout/Layout.tsx`) — wraps every page with `AnimatePresence` for page transitions; uses `NewTitle` to change the browser tab title on window blur/focus.

**Shared components** (`src/shared/components/`) — exported via `index.ts`. Key ones:
- `Hero`, `Header`, `FooterNew` — page chrome
- `Particle` — tsparticles background
- `Konva` — canvas-based drawing (react-konva)
- `Portfolio`, `Resume`, `Features` — main content sections

**Theming** (`src/shared/themes/`) — Light and Dark MUI themes in `Light.ts` / `Dark.ts`.

**Path alias:** `src/*` resolves to `src/*` (configured in both `vite.config.ts` and `tsconfig.json`).

**Styling:** Global CSS variables and utilities are in `src/styles/global.css`. Brand colors: Blue Sky `#025b93`, Pink `#ff014f`. MUI + Emotion used for component-level styling.

**Notable libraries:**
- `framer-motion` — page and element animations
- `tsparticles` / `react-tsparticles` — animated particle backgrounds
- `react-konva` / `konva` — canvas-based interactive graphics
- `react-simple-typewriter` — typewriter text effects

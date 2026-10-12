# gbf

A React web application.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 |
| Language | TypeScript 5.9 |
| Build tool | Vite 8 |
| Linting | ESLint 10 (flat config) + typescript-eslint 8 |
| Formatting | Prettier 3 |
| Package manager | npm |

> **TypeScript version note:** TypeScript is pinned to `5.9.3` (latest stable 5.x). TypeScript 7.x is the `latest` tag on npm as of the scaffold date but `typescript-eslint@8` only supports `<6.1.0`. Upgrade TypeScript once typescript-eslint adds support.

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
```

## Available scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Type-check then compile to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across all source files |
| `npm run lint:fix` | Run ESLint and auto-fix violations |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run typecheck` | Type-check without emitting output |

## Project structure

```
gbf/
├── public/              # Static assets served verbatim
│   └── favicon.svg
├── src/
│   ├── assets/          # Imported assets (images, fonts, etc.)
│   ├── components/      # Shared/reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page-level components (route roots)
│   ├── utils/           # Pure utility functions
│   ├── App.tsx          # Root application component
│   ├── index.css        # Global CSS reset & base styles
│   ├── main.tsx         # React DOM entry point
│   └── vite-env.d.ts    # Vite client type declarations
├── eslint.config.js     # ESLint flat config
├── .prettierrc          # Prettier config
├── index.html           # HTML entry point
├── tsconfig.json        # Root TypeScript project references
├── tsconfig.app.json    # App source TypeScript config
├── tsconfig.node.json   # Vite config TypeScript config
└── vite.config.ts       # Vite config (alias: @ → src/)
```

## Path alias

`@/` resolves to `src/`. Example:

```ts
import { MyComponent } from '@/components/MyComponent'
```

## Security audit

Run at scaffold time: `npm audit` — **0 vulnerabilities found**.

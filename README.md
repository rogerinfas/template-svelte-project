# Template Svelte Project

[![Svelte](https://img.shields.io/badge/Svelte-5-ff3e00?logo=svelte)](https://svelte.dev/)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-2-ff3e00)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

Plantilla base para proyectos SvelteKit con Tailwind CSS, componentes UI (shadcn-style), TanStack Query y Storybook.

## Requisitos

- Node.js 18+
- pnpm (recomendado) o npm

## Instalación

```sh
pnpm install
# o
npm install
```

## Desarrollo

Inicia el servidor de desarrollo:

```sh
pnpm dev
# o abre en el navegador
pnpm dev -- --open
```

## Build

Para generar la versión de producción:

```sh
pnpm build
```

Previsualiza el build con:

```sh
pnpm preview
```

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Build de producción |
| `pnpm preview` | Previsualizar build |
| `pnpm lint` | Ejecutar ESLint y Prettier |
| `pnpm test` | Ejecutar tests unitarios |
| `pnpm storybook` | Iniciar Storybook (puerto 6006) |

> Para desplegar, puede ser necesario configurar un [adapter](https://svelte.dev/docs/kit/adapters) según tu entorno.

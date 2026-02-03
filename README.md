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
| `pnpm validate` | Ejecutar check, lint y tests |

## Testing y Storybook

- **Tests unitarios**: `pnpm test` (usa Vitest y vitest-browser-svelte).
- **Typecheck**: `pnpm typecheck` para validar tipos de TypeScript.
- **Storybook**: `pnpm storybook` para explorar los componentes UI.

## Documentación

- [IMPLEMENTACION.md](./IMPLEMENTACION.md): estructura del proyecto y guía de implementación.
- [docs/ACCESSIBILITY.md](./docs/ACCESSIBILITY.md): pautas básicas de accesibilidad.

## Contribuir

1. Crea una rama desde `develop`: `git checkout -b feat/mi-cambio`
2. Realiza tus cambios y commits con mensajes descriptivos
3. Abre un Pull Request hacia `develop`

> Para desplegar, puede ser necesario configurar un [adapter](https://svelte.dev/docs/kit/adapters) según tu entorno.

## Entorno y variables

- Crea un archivo `.env` a partir de `.env.example`.
- Usa el prefijo `VITE_` para variables expuestas al cliente.
- El cliente OpenAPI se configura en `src/lib/api/backend.ts`.

## Arquitectura rápida

- `src/routes`: rutas públicas, de autenticación y protegidas.
- `src/lib/components`: componentes UI reutilizables (botones, tablas, formularios, layout).
- `src/lib/api`: cliente OpenAPI y tipos generados.
- `src/stories`: historias de ejemplo para Storybook.

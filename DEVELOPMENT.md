# Guía de desarrollo

Esta guía describe el flujo recomendado para trabajar con el template SvelteKit.

## Requisitos previos

- Node.js 18 o superior instalado.
- Gestor de paquetes `pnpm` global (o usar `npm`).
- Acceso al repositorio en GitHub y `gh` autenticado.

## Flujo diario de trabajo

1. Actualizar `develop`: `git checkout develop && git pull`.
2. Crear rama de trabajo: `git checkout -b feat/mi-feature`.
3. Implementar cambios y ejecutar `pnpm validate`.
4. Subir la rama y abrir PR hacia `develop`.

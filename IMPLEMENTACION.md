# Documentación de Implementación

## Índice

- [Configuración Principal](#configuración-principal)
- [Estructura de Directorios](#estructura-de-directorios)
- [Configuración de Herramientas](#configuración-de-herramientas)
- [Scripts de pnpm](#scripts-de-pnpm)
- [Notas de Implementación](#notas-de-implementación)

## Estructura Detallada del Proyecto

## Configuración Principal

### `svelte.config.js`
- Configura el adaptador `@sveltejs/adapter-node`
- Habilita el alias `$lib` para importaciones
- Configura opciones de Vite y plugins

### `vite.config.ts`
- Configuración de Vite con soporte para Svelte
- Plugins:
  - `@sveltejs/vite-plugin-svelte`
  - `@tailwindcss/vite`
  - `vite-plugin-devtools-json`
- Optimizaciones de compilación

### `eslint.config.js`
- Configuración de ESLint
- Plugins:
  - `@sveltejs/kit`
  - `eslint-plugin-svelte`
  - `eslint-config-prettier`
- Reglas personalizadas para TypeScript y Svelte

## Estructura de Directorios

### `/src`
- `app.css`: Estilos globales de la aplicación
- `app.d.ts`: Tipos globales de TypeScript
- `app.html`: Plantilla HTML base
- `utils.ts`: Utilidades globales

### `/src/routes`
- `+layout.svelte`: Layout principal
  - Configuración de proveedores globales
  - Estructura base de la aplicación
  - Manejo de temas
- `+page.svelte`: Página principal
  - Componente raíz de la aplicación
  - Enrutamiento principal

### `/src/lib/components`
Componentes UI reutilizables:

#### `/ui/button`
- `button.svelte`: Componente de botón personalizable
- `index.ts`: Exportaciones públicas

#### `/ui/form`
- Componentes para formularios:
  - `form-button.svelte`: Botón de envío
  - `form-field.svelte`: Campo de formulario con validación
  - `form-label.svelte`: Etiqueta de campo
  - `form-field-errors.svelte`: Manejador de errores

#### `/ui/table`
- Componentes para tablas:
  - `table.svelte`: Tabla base
  - `table-header.svelte`: Encabezado de tabla
  - `table-row.svelte`: Fila de tabla
  - `table-cell.svelte`: Celda de tabla

### `/src/lib/api`
- `backend.ts`: Cliente API para comunicación con el backend
- `types/`: Tipos generados a partir de OpenAPI

### `/src/lib/hooks`
- Hooks personalizados de Svelte
- Manejo de estado global
- Utilidades de autenticación

## Configuración de Herramientas

### Tailwind CSS
- Configuración personalizada en `tailwind.config.js`
- Integración con Vite a través de `@tailwindcss/vite`
- Plugins adicionales:
  - `@tailwindcss/forms` para estilos de formularios
  - `@tailwindcss/typography` para estilos tipográficos
  - `tailwind-merge` para manejo de clases dinámicas

### Storybook
- Configuración en `.storybook/`
  - Configuración de complementos
  - Estilos globales
  - Addons instalados:
    - `@storybook/addon-a11y` para accesibilidad
    - `@storybook/addon-docs` para documentación
    - `@storybook/addon-vitest` para pruebas

## Dependencias Clave

### Desarrollo
```json
{
  "@sveltejs/kit": "^2.47.1",
  "svelte": "^5.41.0",
  "typescript": "^5.9.3",
  "vite": "^7.1.10"
}
```

### UI y Utilidades
```json
{
  "@lucide/svelte": "^0.552.0",
  "tailwindcss": "^4.1.14",
  "sveltekit-superforms": "^2.28.1",
  "@tanstack/svelte-query": "^6.0.5"
}
```

## Scripts de pnpm

### Comandos Principales
| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo Vite |
| `pnpm build` | Construye la aplicación para producción |
| `pnpm preview` | Previsualiza la versión de producción |
| `pnpm storybook` | Inicia el entorno de Storybook en el puerto 6006 |
| `pnpm build-storybook` | Construye la versión estática de Storybook |

### Desarrollo y Calidad de Código
| Comando | Descripción |
|---------|-------------|
| `pnpm check` | Verifica tipos de TypeScript |
| `pnpm check:watch` | Verificación continua de tipos |
| `pnpm format` | Formatea el código con Prettier |
| `pnpm lint` | Ejecuta ESLint y Prettier en modo verificación |

### Pruebas
| Comando | Descripción |
|---------|-------------|
| `pnpm test` | Ejecuta pruebas unitarias con Vitest |
| `pnpm test:unit` | Ejecuta pruebas con más opciones |
| `pnpm test:ts` | Verifica tipos TypeScript sin emitir archivos |

### Utilidades
| Comando | Descripción |
|---------|-------------|
| `pnpm generate` | Genera tipos de TypeScript desde la API OpenAPI |
| `pnpm prepare` | Prepara el entorno de desarrollo (ejecutado automáticamente por pnpm) |

## Configuraciones Especiales

### TypeScript
- Configuración estricta habilitada
- Tipado para módulos de Svelte
- Rutas tipadas

### ESLint y Prettier
- Configuración extendida para Svelte
- Integración con Prettier
- Reglas personalizadas para el proyecto

## Notas de Implementación

1. **Manejo de Estado**
   - Uso de Svelte stores para estado global
   - TanStack Query para manejo de datos del servidor

2. **Estilizado**
   - Enfoque mobile-first
   - Variables CSS personalizadas
   - Utilidades de Tailwind para diseño responsivo

3. **Rendimiento**
   - División de código automática
   - Carga perezosa de rutas
   - Optimización de assets

*Documentación generada automáticamente el 6 de noviembre de 2025*

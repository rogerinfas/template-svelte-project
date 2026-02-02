/**
 * Cliente API generado con openapi-fetch.
 * Ejecuta `pnpm generate` con el backend levantado para generar tipos en ./types/api.ts
 */
import createClient from "openapi-fetch";
// import type { paths } from "./types/api";

/** Base URL por defecto para la API (desarrollo) */
const DEFAULT_BASE_URL = "http://localhost:4000/api";

// Cuando existan tipos: createClient<paths>({ baseUrl: DEFAULT_BASE_URL })
const client = createClient({
	baseUrl: typeof window !== "undefined" ? "" : DEFAULT_BASE_URL
});

export default client;

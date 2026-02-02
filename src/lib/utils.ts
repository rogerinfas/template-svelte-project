import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind de forma segura, evitando conflictos.
 * Usa clsx para condicionales y tailwind-merge para deduplicar clases.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/** Quita la prop `child` del tipo T si existe */
export type WithoutChild<T> = T extends { child?: unknown } ? Omit<T, "child"> : T;
/** Quita la prop `children` del tipo T si existe */
export type WithoutChildren<T> = T extends { children?: unknown } ? Omit<T, "children"> : T;
/** Quita `child` y `children` del tipo T */
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
/** Añade ref opcional al tipo de elemento dado */
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

/**
 * Dimension utilities for Panda CSS
 */

import type { Token } from "@pandacss/types";

/**
 * Convert pixels to rem units
 * @param px - The pixel value to convert
 * @param base - The base font size (default: 16)
 * @returns The rem value as a string
 */
export function toRem(px: number, base = 16): string {
  return `${px / base}rem`;
}

/**
 * Convert pixels to em units
 * @param px - The pixel value to convert
 * @param base - The base font size (default: 16)
 * @returns The em value as a string
 */
export function toEm(px: number, base = 16): string {
  return `${px / base}em`;
}

/**
 * Create a sizing token
 * @param name (e.g. 4 → 1rem | 16px)
 */
export function toSizingToken(name: number): Token<string> {
  return {
    value: toRem(name),
    description: `The size of ${toRem(name)}`,
  };
}

/**
 * 共通トークン定義
 * サイズ、間隔、境界線、影、アニメーションなどの基本的なデザイントークン
 */

export * from './dimensions';

// 基本的なデザイントークンのセット
export const commonTokens = {
  spacing: {
    0: { value: '0' },
    px: { value: '1px' },
    0.5: { value: '0.125rem' },
    1: { value: '0.25rem' },
    2: { value: '0.5rem' },
    3: { value: '0.75rem' },
    4: { value: '1rem' },
    5: { value: '1.25rem' },
    6: { value: '1.5rem' },
    8: { value: '2rem' },
    10: { value: '2.5rem' },
    12: { value: '3rem' },
    16: { value: '4rem' },
    20: { value: '5rem' },
    24: { value: '6rem' },
    32: { value: '8rem' },
  },
  borderRadius: {
    none: { value: '0' },
    sm: { value: '0.125rem' },
    DEFAULT: { value: '0.25rem' },
    md: { value: '0.375rem' },
    lg: { value: '0.5rem' },
    xl: { value: '0.75rem' },
    '2xl': { value: '1rem' },
    full: { value: '9999px' },
  },
} as const;

export const spacing = commonTokens.spacing;
export const borderRadius = commonTokens.borderRadius;

// シャドウトークン
export const shadows = {
  none: { value: 'none' },
  sm: { value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' },
  DEFAULT: { value: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' },
  md: { value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
  lg: { value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' },
  xl: { value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' },
} as const;

// トランジション
export const transitions = {
  none: { value: 'none' },
  all: { value: 'all 150ms ease-in-out' },
  DEFAULT: { value: 'all 150ms ease-in-out' },
  colors: { value: 'color, background-color, border-color, fill, stroke 150ms ease-in-out' },
  opacity: { value: 'opacity 150ms ease-in-out' },
  shadow: { value: 'box-shadow 150ms ease-in-out' },
  transform: { value: 'transform 150ms ease-in-out' },
} as const;

// タイポグラフィ
export const typography = {
  fontSizes: {
    xs: { value: '0.75rem' },
    sm: { value: '0.875rem' },
    base: { value: '1rem' },
    lg: { value: '1.125rem' },
    xl: { value: '1.25rem' },
    '2xl': { value: '1.5rem' },
    '3xl': { value: '1.875rem' },
    '4xl': { value: '2.25rem' },
    '5xl': { value: '3rem' },
  },
  fontWeights: {
    thin: { value: 100 },
    light: { value: 300 },
    normal: { value: 400 },
    medium: { value: 500 },
    semibold: { value: 600 },
    bold: { value: 700 },
    extrabold: { value: 800 },
    black: { value: 900 },
  },
  lineHeights: {
    none: { value: 1 },
    tight: { value: 1.25 },
    snug: { value: 1.375 },
    normal: { value: 1.5 },
    relaxed: { value: 1.625 },
    loose: { value: 2 },
  },
} as const;

export type CommonTokens = typeof commonTokens;

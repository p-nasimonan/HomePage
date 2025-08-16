/**
 * スタイルユーティリティ関数
 */

import type { DesignTokens } from './tokens';

/**
 * カラートークンから CSS カスタムプロパティ形式に変換
 */
export function tokenToCssVar(token: string): string {
  return `var(--${token.replace(/\./g, '-')})`;
}

/**
 * ネストされたオブジェクトから CSS カスタムプロパティを生成
 */
export function generateCssVars(
  obj: Record<string, any>,
  prefix = '',
): Record<string, string> {
  const result: Record<string, string> = {};
  
  for (const [key, value] of Object.entries(obj)) {
    const cssKey = prefix ? `${prefix}-${key}` : key;
    
    if (typeof value === 'object' && value !== null) {
      Object.assign(result, generateCssVars(value, cssKey));
    } else {
      result[`--${cssKey}`] = String(value);
    }
  }
  
  return result;
}

/**
 * レスポンシブスタイルのヘルパー
 */
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export function responsive(styles: Record<keyof typeof breakpoints | 'base', string>) {
  const { base, ...breakpointStyles } = styles;
  let css = base || '';
  
  for (const [bp, style] of Object.entries(breakpointStyles)) {
    css += `@media (min-width: ${breakpoints[bp as keyof typeof breakpoints]}) { ${style} }`;
  }
  
  return css;
}

/**
 * カラーの透明度調整
 */
export function withOpacity(color: string, opacity: number): string {
  if (color.startsWith('rgb(')) {
    return color.replace('rgb(', 'rgba(').replace(')', `, ${opacity})`);
  }
  if (color.startsWith('#')) {
    const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0');
    return `${color}${alpha}`;
  }
  return `${color} / ${opacity}`;
}

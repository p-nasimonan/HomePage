/**
 * スタイルトークン統合エントリーポイント
 * 
 * デザインシステムの全トークンを管理
 * Panda CSS の設定とも連携
 */

export { colorTokens, brandColors, statusColors } from './colors';
export { commonTokens, spacing, borderRadius, shadows, transitions, typography } from './commons';

// 型定義の再エクスポート
export type { ColorTokens, BrandColors, SemanticColors } from './colors';
export type { CommonTokens } from './commons';

/**
 * 全トークンの統合オブジェクト
 */
import { colorTokens } from './colors';
import { commonTokens } from './commons';

export const designTokens = {
  colors: colorTokens,
  ...commonTokens,
} as const;

export type DesignTokens = typeof designTokens;

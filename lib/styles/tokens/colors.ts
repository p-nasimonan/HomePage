/**
 * カラートークン定義
 * Panda CSS プリセット形式 - 構造化版
 */

import { type SemanticTokens, type Tokens, defineTokens } from "@pandacss/dev";
import { defu } from "defu";

type ColorToken = NonNullable<Parameters<typeof defineTokens.colors>[0]>;

interface TokenFragment {
  tokens: ColorToken;
  semanticTokens: ColorToken;
}

const teal = {
  tokens: {
    50: { value: "#f0fdfa" },
    100: { value: "#ccfbf1" },
    200: { value: "#99f6e4" },
    300: { value: "#5eead4" },
    400: { value: "#2dd4bf" },
    500: { value: "#14b8a6" },
    600: { value: "#0d9488" },
    700: { value: "#0f766e" },
    800: { value: "#115e59" },
    900: { value: "#134e4a" },
  },
  semanticTokens: {
    bg: { value: "{colors.teal.50}" },
    lite: { value: "{colors.teal.100}" },
    regular: { value: "{colors.teal.500}" },
    deep: { value: "{colors.teal.700}" },
  },
} as const satisfies TokenFragment;

const mint = {
  tokens: {
    50: { value: "#ecfdf5" },
    100: { value: "#d1fae5" },
    200: { value: "#a7f3d0" },
    300: { value: "#6ee7b7" },
    400: { value: "#34d399" },
    500: { value: "#10b981" },
    600: { value: "#059669" },
    700: { value: "#047857" },
    800: { value: "#065f46" },
    900: { value: "#064e3b" },
  },
  semanticTokens: {
    bg: { value: "{colors.mint.50}" },
    lite: { value: "{colors.mint.100}" },
    regular: { value: "{colors.mint.300}" },
    deep: { value: "{colors.mint.700}" },
  },
} as const satisfies TokenFragment;

const sage = {
  tokens: {
    50: { value: "#f0fdf4" },
    100: { value: "#dcfce7" },
    200: { value: "#bbf7d0" },
    300: { value: "#86efac" },
    400: { value: "#4ade80" },
    500: { value: "#22c55e" },
    600: { value: "#16a34a" },
    700: { value: "#15803d" },
    800: { value: "#166534" },
    900: { value: "#14532d" },
  },
  semanticTokens: {
    bg: { value: "{colors.sage.50}" },
    lite: { value: "{colors.sage.100}" },
    regular: { value: "{colors.sage.300}" },
    deep: { value: "{colors.sage.600}" },
  },
} as const satisfies TokenFragment;

const cream = {
  tokens: {
    50: { value: "#fffbeb" },
    100: { value: "#fef3c7" },
    200: { value: "#fde68a" },
    300: { value: "#fcd34d" },
    400: { value: "#fbbf24" },
    500: { value: "#f59e0b" },
    600: { value: "#d97706" },
    700: { value: "#b45309" },
    800: { value: "#92400e" },
    900: { value: "#78350f" },
  },
  semanticTokens: {
    bg: { value: "{colors.cream.50}" },
    lite: { value: "{colors.cream.100}" },
    regular: { value: "{colors.cream.200}" },
    deep: { value: "{colors.cream.600}" },
  },
} as const satisfies TokenFragment;

const peach = {
  tokens: {
    50: { value: "#fff7ed" },
    100: { value: "#ffedd5" },
    200: { value: "#fed7aa" },
    300: { value: "#fdba74" },
    400: { value: "#fb923c" },
    500: { value: "#f97316" },
    600: { value: "#ea580c" },
    700: { value: "#c2410c" },
    800: { value: "#9a3412" },
    900: { value: "#7c2d12" },
  },
  semanticTokens: {
    bg: { value: "{colors.peach.50}" },
    lite: { value: "{colors.peach.100}" },
    regular: { value: "{colors.peach.300}" },
    deep: { value: "{colors.peach.600}" },
  },
} as const satisfies TokenFragment;

const gray = {
  tokens: {
    50: { value: "#f8fafc" },
    100: { value: "#f1f5f9" },
    200: { value: "#e2e8f0" },
    300: { value: "#cbd5e1" },
    400: { value: "#94a3b8" },
    500: { value: "#64748b" },
    600: { value: "#475569" },
    700: { value: "#334155" },
    800: { value: "#1e293b" },
    900: { value: "#0f172a" },
  },
  semanticTokens: {
    bg: { value: "{colors.gray.50}" },
    lite: { value: "{colors.gray.200}" },
    regular: { value: "{colors.gray.500}" },
    deep: { value: "{colors.gray.700}" },
  },
} as const satisfies TokenFragment;

const status = {
  tokens: {
    success: { value: "#10b981" },
    warning: { value: "#f59e0b" },
    error: { value: "#ef4444" },
    info: { value: "#3b82f6" },
  },
  semanticTokens: {},
} as const satisfies TokenFragment;

const white = {
  tokens: {
    DEFAULT: { value: "#ffffff" },
  },
  semanticTokens: {},
} as const satisfies TokenFragment;

const black = {
  tokens: {
    DEFAULT: { value: "#000000" },
  },
  semanticTokens: {},
} as const satisfies TokenFragment;

const colorPalettes = {
  teal,
  mint,
  sage,
  cream,
  peach,
  gray,
  status,
} as const;

/**
 * 色の種類名
 */
export type ColorName = keyof typeof colorPalettes;

/**
 * 色の種類名の配列
 */
export const colorNames = Object.keys(colorPalettes) as ColorName[];

/**
 * Semantic Token の名前
 */
export type ColorTokenName =
  `${ColorName}.${keyof (typeof colorPalettes)[ColorName]["semanticTokens"]}`;

/**
 * Semantic Token の名前の配列
 */
export const colorTokenNames: ColorTokenName[] = Object.entries(
  colorPalettes as Record<
    ColorName,
    { semanticTokens: Record<string, unknown> }
  >,
).flatMap(([name, { semanticTokens }]) => {
  const tokenNames = Object.keys(semanticTokens);
  return tokenNames.map(
    (tokenName) => `${name}.${tokenName}` as ColorTokenName,
  );
});

const colorPaletteEntries = Object.entries(colorPalettes) as [
  string,
  (typeof colorPalettes)[keyof typeof colorPalettes],
][];

/**
 * Semantic Token から Semantic Token に参照することができないため、
 * semantic color token を参照する用に、定義から直に値を取り出す
 */
function pickSemanticTokenValue(
  colorName: ColorName,
  variant: "bg" | "lite" | "regular" | "deep",
) {
  const colorRef = colorPalettes[colorName].semanticTokens[variant]?.value;
  if (!colorRef) return "";
  // omit `{` and `}`
  return colorRef.replace(/[{}]/g, "");
}

/**
 * 文字列の空白を削除する
 */
function omitWhiteSpace(value: string) {
  // 改行、タブ、スペースを削除 ただし、連続しないスペースは削除しない
  return value.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
}

export const tokens: Tokens = defineTokens({
  colors: defineTokens.colors(
    (
      [...colorPaletteEntries, ["white", white], ["black", black]] as const
    ).reduce<ColorToken>(
      (acc, [name, color]) => defu(acc, { [name]: color.tokens }),
      {},
    ),
  ),
});

export const semanticTokens: SemanticTokens = defineTokens({
  colors: defineTokens.colors(
    (
      [...colorPaletteEntries, ["white", white], ["black", black]] as const
    ).reduce<ColorToken>(
      (acc, [name, color]) => defu(acc, { [name]: color.semanticTokens }),
      {},
    ),
  ),
  gradients: defineTokens.gradients(
    defu(
      {},
      // default gradient
      ...colorNames.filter(name => name !== 'status').map((name) => ({
        [name]: {
          DEFAULT: {
            value: `linear-gradient(135deg, {${pickSemanticTokenValue(name, "bg")}}, {${pickSemanticTokenValue(name, "lite")}})`,
          },
        },
      })),

      // glass effect gradient
      ...colorNames.filter(name => name !== 'status').map((name) => ({
        [name]: {
          glass: {
            value: omitWhiteSpace(`
              linear-gradient(135deg, 
                color-mix(in srgb, {${pickSemanticTokenValue(name, "bg")}} 80%, transparent) 0%, 
                color-mix(in srgb, {${pickSemanticTokenValue(name, "lite")}} 40%, transparent) 100%
              )
            `),
          },
        },
      })),
    ),
  ),
});

// 後方互換性のためのエクスポート
export const brandColors = {
  teal: teal.tokens[500].value,
  mint: mint.tokens[300].value,
  sage: sage.tokens[300].value,
  cream: cream.tokens[100].value,
  peach: peach.tokens[200].value,
} as const;

export const statusColors = {
  success: status.tokens.success.value,
  warning: status.tokens.warning.value,
  error: status.tokens.error.value,
  info: status.tokens.info.value,
} as const;

export const colorTokens = {
  brand: brandColors,
  status: statusColors,
} as const;

export type ColorTokens = typeof colorTokens;
export type BrandColors = keyof typeof brandColors;
export type SemanticColors = keyof typeof colorPalettes;

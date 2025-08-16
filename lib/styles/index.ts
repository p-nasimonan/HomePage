/**
 * Youkan-Themes Design System
 * Panda CSS プリセット形式のミニマルデザインシステム
 */

import { definePreset } from "@pandacss/dev";
import { defu } from "defu";
import { tokens, semanticTokens, colorNames } from "./tokens/colors.ts";
import * as dimensions from "./tokens/dimensions.ts";
import * as animations from "./tokens/animations.ts";
import * as transforms from "./tokens/transforms.ts";
import * as typographies from "./tokens/typography.ts";
import { buttonRecipe, badgeRecipe, cardRecipe, slideRecipe, slideItemRecipe } from "./recipes";

export default definePreset({
  name: "youkan-themes",
  theme: {
    tokens: defu(
      {},
      tokens,
      dimensions.tokens,
      animations.tokens,
      transforms.tokens,
      typographies.tokens,
    ),
    semanticTokens: defu(
      {},
      semanticTokens,
      dimensions.semanticTokens,
      animations.semanticTokens,
    ),
    recipes: {
      btn: buttonRecipe,
      badge: badgeRecipe,
      card: cardRecipe,
      slide: slideRecipe,
      slideItem: slideItemRecipe,
    },
    breakpoints: dimensions.breakpoints,
    textStyles: typographies.textStyle,
    keyframes: animations.keyframes,
  },
  conditions: {
    extend: {
      supportHover: ["@media (hover: hover) and (pointer: fine)"],
      hover: [
        "@media (hover: hover) and (pointer: fine)",
        "&:is(:hover, [data-hover])",
      ],
      pc: ["@media screen and (width >= 1440px)"],
      spOnly: ["@media screen and (width < 1440px)"],
      dark: ["&:is(.dark, [data-theme=dark])"],
      light: ["&:is(.light, [data-theme=light])"],
    },
  },
  // グローバルフォントフェイスは一時的にコメントアウト
  // globalFontface: typographies.globalFontface,
  globalCss: {
    html: {
      "--global-font-body": typographies.globalFontFamily,
      fontFamily: "var(--global-font-body)",
    },
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    body: {
      margin: 0,
      fontFamily: "var(--global-font-body)",
      lineHeight: "{lineHeights.normal}",
      color: "{colors.text}",
      backgroundColor: "{colors.bg}",
    },
  },
  globalVars: defu({}, animations.globalVars),
  staticCss: {
    css: [
      {
        properties: {
          colorPalette: colorNames,
        },
      },
    ],
  },
});

/**
 * ライブラリバージョン
 */
export const YOUKAN_THEMES_VERSION = '1.0.0' as const;

// 従来のエクスポート（後方互換性）
export * from './tokens';
export * from './utils';
export * from './components';

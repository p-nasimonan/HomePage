/**
 * トランスフォーム関連トークン
 */

export const tokens = {
  transforms: {
    // 回転
    rotate: {
      0: { value: 'rotate(0deg)' },
      1: { value: 'rotate(1deg)' },
      2: { value: 'rotate(2deg)' },
      3: { value: 'rotate(3deg)' },
      6: { value: 'rotate(6deg)' },
      12: { value: 'rotate(12deg)' },
      45: { value: 'rotate(45deg)' },
      90: { value: 'rotate(90deg)' },
      180: { value: 'rotate(180deg)' },
    },
    // スケール
    scale: {
      0: { value: 'scale(0)' },
      50: { value: 'scale(0.5)' },
      75: { value: 'scale(0.75)' },
      90: { value: 'scale(0.9)' },
      95: { value: 'scale(0.95)' },
      100: { value: 'scale(1)' },
      105: { value: 'scale(1.05)' },
      110: { value: 'scale(1.1)' },
      125: { value: 'scale(1.25)' },
      150: { value: 'scale(1.5)' },
    },
    // 移動
    translate: {
      0: { value: 'translate(0, 0)' },
      x: {
        0: { value: 'translateX(0)' },
        1: { value: 'translateX(0.25rem)' },
        2: { value: 'translateX(0.5rem)' },
        3: { value: 'translateX(0.75rem)' },
        4: { value: 'translateX(1rem)' },
        full: { value: 'translateX(100%)' },
        half: { value: 'translateX(50%)' },
      },
      y: {
        0: { value: 'translateY(0)' },
        1: { value: 'translateY(0.25rem)' },
        2: { value: 'translateY(0.5rem)' },
        3: { value: 'translateY(0.75rem)' },
        4: { value: 'translateY(1rem)' },
        full: { value: 'translateY(100%)' },
        half: { value: 'translateY(50%)' },
      },
    },
  },
  // フィルター
  filters: {
    blur: {
      none: { value: 'blur(0)' },
      sm: { value: 'blur(4px)' },
      DEFAULT: { value: 'blur(8px)' },
      md: { value: 'blur(12px)' },
      lg: { value: 'blur(16px)' },
      xl: { value: 'blur(24px)' },
      '2xl': { value: 'blur(40px)' },
      '3xl': { value: 'blur(64px)' },
    },
    brightness: {
      0: { value: 'brightness(0)' },
      50: { value: 'brightness(0.5)' },
      75: { value: 'brightness(0.75)' },
      90: { value: 'brightness(0.9)' },
      95: { value: 'brightness(0.95)' },
      100: { value: 'brightness(1)' },
      105: { value: 'brightness(1.05)' },
      110: { value: 'brightness(1.1)' },
      125: { value: 'brightness(1.25)' },
      150: { value: 'brightness(1.5)' },
      200: { value: 'brightness(2)' },
    },
    contrast: {
      0: { value: 'contrast(0)' },
      50: { value: 'contrast(0.5)' },
      75: { value: 'contrast(0.75)' },
      100: { value: 'contrast(1)' },
      125: { value: 'contrast(1.25)' },
      150: { value: 'contrast(1.5)' },
      200: { value: 'contrast(2)' },
    },
    saturate: {
      0: { value: 'saturate(0)' },
      50: { value: 'saturate(0.5)' },
      100: { value: 'saturate(1)' },
      150: { value: 'saturate(1.5)' },
      200: { value: 'saturate(2)' },
    },
  },
};

/**
 * タイポグラフィ関連トークン
 */

export const globalFontFamily = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

export const globalFontface = {
  Inter: [
    {
      src: 'url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap)',
      fontWeight: '100 900',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
  ],
  'JetBrains Mono': [
    {
      src: 'url(https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap)',
      fontWeight: '100 800',
      fontStyle: 'normal italic',
      fontDisplay: 'swap',
    },
  ],
};

export const tokens = {
  fonts: {
    sans: { value: `${globalFontFamily}` },
    serif: { value: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' },
    mono: { value: '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace' },
  },
  fontSizes: {
    xs: { value: '0.75rem' },     // 12px
    sm: { value: '0.875rem' },    // 14px
    base: { value: '1rem' },      // 16px
    lg: { value: '1.125rem' },    // 18px
    xl: { value: '1.25rem' },     // 20px
    '2xl': { value: '1.5rem' },   // 24px
    '3xl': { value: '1.875rem' }, // 30px
    '4xl': { value: '2.25rem' },  // 36px
    '5xl': { value: '3rem' },     // 48px
    '6xl': { value: '3.75rem' },  // 60px
    '7xl': { value: '4.5rem' },   // 72px
    '8xl': { value: '6rem' },     // 96px
    '9xl': { value: '8rem' },     // 128px
  },
  fontWeights: {
    thin: { value: '100' },
    extralight: { value: '200' },
    light: { value: '300' },
    normal: { value: '400' },
    medium: { value: '500' },
    semibold: { value: '600' },
    bold: { value: '700' },
    extrabold: { value: '800' },
    black: { value: '900' },
  },
  lineHeights: {
    none: { value: '1' },
    tight: { value: '1.25' },
    snug: { value: '1.375' },
    normal: { value: '1.5' },
    relaxed: { value: '1.625' },
    loose: { value: '2' },
    3: { value: '.75rem' },
    4: { value: '1rem' },
    5: { value: '1.25rem' },
    6: { value: '1.5rem' },
    7: { value: '1.75rem' },
    8: { value: '2rem' },
    9: { value: '2.25rem' },
    10: { value: '2.5rem' },
  },
  letterSpacings: {
    tighter: { value: '-0.05em' },
    tight: { value: '-0.025em' },
    normal: { value: '0em' },
    wide: { value: '0.025em' },
    wider: { value: '0.05em' },
    widest: { value: '0.1em' },
  },
};

export const textStyle = {
  // ヘッディング
  'heading.h1': {
    value: {
      fontSize: '{fontSizes.4xl}',
      fontWeight: '{fontWeights.bold}',
      lineHeight: '{lineHeights.tight}',
      letterSpacing: '{letterSpacings.tight}',
    },
  },
  'heading.h2': {
    value: {
      fontSize: '{fontSizes.3xl}',
      fontWeight: '{fontWeights.semibold}',
      lineHeight: '{lineHeights.tight}',
      letterSpacing: '{letterSpacings.tight}',
    },
  },
  'heading.h3': {
    value: {
      fontSize: '{fontSizes.2xl}',
      fontWeight: '{fontWeights.semibold}',
      lineHeight: '{lineHeights.snug}',
    },
  },
  'heading.h4': {
    value: {
      fontSize: '{fontSizes.xl}',
      fontWeight: '{fontWeights.medium}',
      lineHeight: '{lineHeights.snug}',
    },
  },
  'heading.h5': {
    value: {
      fontSize: '{fontSizes.lg}',
      fontWeight: '{fontWeights.medium}',
      lineHeight: '{lineHeights.normal}',
    },
  },
  'heading.h6': {
    value: {
      fontSize: '{fontSizes.base}',
      fontWeight: '{fontWeights.medium}',
      lineHeight: '{lineHeights.normal}',
    },
  },
  
  // ボディテキスト
  'body.large': {
    value: {
      fontSize: '{fontSizes.lg}',
      fontWeight: '{fontWeights.normal}',
      lineHeight: '{lineHeights.relaxed}',
    },
  },
  'body.base': {
    value: {
      fontSize: '{fontSizes.base}',
      fontWeight: '{fontWeights.normal}',
      lineHeight: '{lineHeights.normal}',
    },
  },
  'body.small': {
    value: {
      fontSize: '{fontSizes.sm}',
      fontWeight: '{fontWeights.normal}',
      lineHeight: '{lineHeights.normal}',
    },
  },
  
  // キャプション・メタ
  'caption': {
    value: {
      fontSize: '{fontSizes.xs}',
      fontWeight: '{fontWeights.normal}',
      lineHeight: '{lineHeights.tight}',
      color: '{colors.text.secondary}',
    },
  },
  'meta': {
    value: {
      fontSize: '{fontSizes.sm}',
      fontWeight: '{fontWeights.medium}',
      lineHeight: '{lineHeights.tight}',
      color: '{colors.text.tertiary}',
      textTransform: 'uppercase',
      letterSpacing: '{letterSpacings.wide}',
    },
  },
  
  // コード
  'code.inline': {
    value: {
      fontSize: '{fontSizes.sm}',
      fontFamily: '{fonts.mono}',
      fontWeight: '{fontWeights.medium}',
      backgroundColor: '{colors.bg.muted}',
      padding: '0.125rem 0.25rem',
      borderRadius: '{radii.sm}',
    },
  },
  'code.block': {
    value: {
      fontSize: '{fontSizes.sm}',
      fontFamily: '{fonts.mono}',
      lineHeight: '{lineHeights.relaxed}',
      backgroundColor: '{colors.bg.tertiary}',
      padding: '{spacing.4}',
      borderRadius: '{radii.md}',
      overflow: 'auto',
    },
  },
};

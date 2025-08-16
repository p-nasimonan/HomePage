---
title: "Panda CSSの基本機能を学ぶ"
description: "Panda CSSの基本的な機能と使い方について、実践的な例を交えて解説します。"
pubDate: 2024-01-20
tags: ["Panda CSS", "CSS", "フロントエンド"]
image: "/blog/panda-css-basics.jpg"
---

# Panda CSSの基本機能を学ぶ

Panda CSSは、モダンなCSS-in-JSライブラリとして注目を集めています。この記事では、Panda CSSの基本機能について詳しく解説します。

## Panda CSSとは

Panda CSSは、Chakra UIチームが開発した新しいCSS-in-JSライブラリです。従来のCSS-in-JSライブラリが抱えていた問題を解決し、より良い開発体験を提供します。

## 主要な機能

### 1. css()関数

最も基本的な機能で、インラインスタイルを作成できます：

```typescript
import { css } from '../styled-system/css';

const buttonStyle = css({
  padding: '12px 24px',
  backgroundColor: 'blue.500',
  color: 'white',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  _hover: {
    backgroundColor: 'blue.600'
  }
});
```

### 2. cva()関数（レシピ）

コンポーネントのバリアントを定義する際に使用します：

```typescript
import { cva } from '../styled-system/css';

const button = cva({
  base: {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  },
  variants: {
    size: {
      small: { padding: '8px 16px', fontSize: '14px' },
      large: { padding: '16px 32px', fontSize: '18px' },
    },
    color: {
      primary: { backgroundColor: 'blue.500', color: 'white' },
      secondary: { backgroundColor: 'gray.500', color: 'white' },
    },
  },
  defaultVariants: {
    size: 'small',
    color: 'primary',
  },
});
```

### 3. レスポンシブデザイン

Panda CSSでは、レスポンシブデザインも簡単に実装できます：

```typescript
const responsiveBox = css({
  padding: '16px',
  fontSize: '16px',
  md: {
    padding: '24px',
    fontSize: '18px',
  },
  lg: {
    padding: '32px',
    fontSize: '20px',
  },
});
```

## パフォーマンスの利点

Panda CSSの最大の利点は、ビルド時にCSSが生成されることです：

- **ゼロランタイム**: 実行時にCSSが生成されない
- **バンドルサイズの削減**: 必要なCSSのみが含まれる
- **高速な読み込み**: 最適化されたCSSファイル

## まとめ

Panda CSSは、モダンなWeb開発に必要な機能を提供しながら、パフォーマンスも重視した優秀なライブラリです。特にAstroとの組み合わせは、静的サイトの構築に最適です。

次回は、より高度な機能やベストプラクティスについて解説します。 
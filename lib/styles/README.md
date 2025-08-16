# Youkan-Themes

AstroとPanda CSSのためのミニマルデザインシステムです。シンプルで使いやすいレシピベースのスタイリングライブラリ。

## 🚀 特徴

- **ミニマル**: 必要最小限のレシピのみ
- **Panda CSS**: 高性能なCSS-in-JSライブラリを使用
- **TypeScript**: 完全な型安全性
- **Astro対応**: .astroファイルで簡単に使用可能

## 📦 レシピ

### Button (`btn`)

基本的なボタンスタイル

```astro
---
import { btn } from '../styled-system/recipes';
---

<button class={btn()}>デフォルト</button>
<button class={btn({ variant: 'secondary', size: 'lg' })}>大きなセカンダリボタン</button>
<button class={btn({ variant: 'outline' })}>アウトラインボタン</button>
```

**バリアント**: `primary`, `secondary`, `outline`  
**サイズ**: `sm`, `md`, `lg`

### Badge

ラベルやタグ用のバッジスタイル

```astro
---
import { badge } from '../styled-system/recipes';
---

<span class={badge()}>新着</span>
<span class={badge({ variant: 'secondary', size: 'sm' })}>タグ</span>
<span class={badge({ variant: 'outline' })}>カテゴリ</span>
```

**バリアント**: `primary`, `secondary`, `outline`  
**サイズ**: `sm`, `md`

### Card

コンテンツカード用のスタイル

```astro
---
import { card } from '../styled-system/recipes';
---

<div class={card()}>
  <h3>カードタイトル</h3>
  <p>カードの内容</p>
</div>

<div class={card({ variant: 'elevated', size: 'lg' })}>
  <h3>大きな浮いているカード</h3>
</div>
```

**バリアント**: `default`, `elevated`  
**サイズ**: `sm`, `md`, `lg`

### Slide & SlideItem

スライドショー用のレシピ（組み合わせて使用）

```astro
---
import { slide, slideItem } from '../styled-system/recipes';
---

<div class={slide({ size: 'lg' })}>
  <div class={slideItem({ state: 'active' })}>
    <img src="/image1.jpg" alt="スライド1" />
  </div>
  <div class={slideItem({ state: 'next' })}>
    <img src="/image2.jpg" alt="スライド2" />
  </div>
  <div class={slideItem({ state: 'prev' })}>
    <img src="/image3.jpg" alt="スライド3" />
  </div>
</div>
```

**Slideサイズ**: `sm`, `md`, `lg`, `xl`  
**SlideItem状態**: `active`, `next`, `prev`

## 💫 使用方法

### 基本的な使い方

```astro
---
// styled-systemから生成されたレシピをインポート
import { btn, badge, card } from '../styled-system/recipes';
---

<div class={card()}>
  <h2>記事タイトル</h2>
  <span class={badge()}>新着</span>
  <p>記事の内容...</p>
  <button class={btn({ variant: 'primary' })}>続きを読む</button>
</div>
```

### スライドショーの実装例

```astro
---
import { slide, slideItem } from '../styled-system/recipes';

const slides = [
  { src: '/image1.jpg', alt: 'スライド1' },
  { src: '/image2.jpg', alt: 'スライド2' },
  { src: '/image3.jpg', alt: 'スライド3' },
];
---

<div class={slide()}>
  {slides.map((slideData, index) => (
    <div class={slideItem({ state: index === 0 ? 'active' : 'next' })}>
      <img src={slideData.src} alt={slideData.alt} />
    </div>
  ))}
</div>
```

## 🎯 設計思想

**Youkan-Themes**は「必要最小限」を重視したミニマルデザインシステムです：

- **シンプル**: 複雑な機能は排除し、基本的なスタイリングレシピのみ提供
- **レシピ駆動**: 大きなコンポーネントではなく、小さなレシピを組み合わせて使用
- **Astro最適化**: .astroファイルでの使用を前提とした設計

## 📄 ライセンス

MIT License

---

**Youkan-Themes v1.0.0** - シンプルで美味しいデザインシステム 🍡

```astro
---
import { card } from '../styled-system/recipes';
---

<div class={card({ variant: 'elevated', size: 'md' })}>
  カードコンテンツ
</div>
```

**バリアント:**
- `default` - デフォルトカード
- `elevated` - エレベーションカード
- `outlined` - アウトラインカード

### Badge Recipe

```astro
---
import { badge } from '../styled-system/recipes';
---

<span class={badge({ variant: 'success', size: 'sm' })}>
  バッジ
</span>
```

**バリアント:**
- `primary` - プライマリ
- `secondary` - セカンダリ
- `success` - 成功
- `warning` - 警告
- `danger` - 危険

### Post Card Recipe

ブログ記事専用カード

```astro
---
import { postCard } from '../styled-system/recipes';
---

<div class={postCard({ variant: 'featured', size: 'lg' })}>
  記事コンテンツ
</div>
```

**バリアント:**
- `default` - デフォルト
- `featured` - フィーチャード記事
- `minimal` - ミニマル

## 🔧 開発

### セットアップ

```bash
npm install
npm run dev
```

### レシピの追加

1. `lib/styles/recipes/` に新しいレシピファイルを作成
2. `lib/styles/recipes/index.ts` にエクスポートを追加
3. `lib/styles/index.ts` のプリセットに追加
4. `npx panda codegen` でコード生成

### コンポーネントの追加

1. `src/components/layouts/` にAstroコンポーネントを作成
2. `lib/styles/components/index.ts` に型定義を追加

## 📝 ライセンス

MIT License

## 🤝 コントリビューション

プルリクエストやイシューは大歓迎です！

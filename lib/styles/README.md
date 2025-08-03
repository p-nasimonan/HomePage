# Anko-UI Design System

モダンなWebアプリケーション向けのデザインシステムです。Panda CSSをベースに構築されています。

## 🚀 特徴

- **Panda CSS**: 高性能なCSS-in-JSライブラリを使用
- **TypeScript**: 完全な型安全性
- **レシピベース**: 再利用可能なスタイリングパターン
- **レスポンシブ**: モバイルファースト設計
- **テーマサポート**: ダークモード対応

## 📦 コンポーネント

### Dropdown Component

アニメーション付きドロップダウンメニューコンポーネント

```astro
---
import { dropdownSlot } from '../styled-system/recipes';

const dropdown = dropdownSlot();
---

<div class={dropdown.trigger}>
  <button>メニュー</button>
  <div class={dropdown.content} data-state="closed">
    <a href="/link1" class={dropdown.item}>アイテム1</a>
    <a href="/link2" class={dropdown.item}>アイテム2</a>
    <a href="/link3" class={dropdown.item}>アイテム3</a>
  </div>
</div>
```

#### 機能
- ✅ スムーズなアニメーション（fade/slide/scale）
- ✅ 3つのサイズ（sm/md/lg）
- ✅ 位置調整（left/right/center）
- ✅ 当たり判定の最適化
- ✅ キーボードアクセシビリティ対応

### Slideshow Component

高機能なスライドショーコンポーネント

```astro
---
import Slideshow from '../components/ui/Slideshow.astro';
import type { SlideshowSlide } from '../../lib/styles/components';

const slides: SlideshowSlide[] = [
  {
    title: "タイトル1",
    description: "説明文",
    link: "/page1",
    linkText: "詳細を見る",
    theme: "gradient1"
  }
];
---

<Slideshow 
  slides={slides}
  size="lg"
  autoPlay={true}
  autoPlayInterval={6000}
  showNavigation={true}
  showIndicators={true}
/>
```

#### 機能
- ✅ 自動再生
- ✅ タッチスワイプ対応
- ✅ ナビゲーションボタン
- ✅ インジケーター
- ✅ 6つのテーマ（グラデーション）
- ✅ レスポンシブデザイン

## 🎨 レシピ（Recipes）

### Button Recipe

```astro
---
import { button } from '../styled-system/recipes';
---

<button class={button({ variant: 'primary', size: 'lg' })}>
  ボタン
</button>
```

**バリアント:**
- `primary` - プライマリボタン（デフォルト）
- `secondary` - セカンダリボタン  
- `outline` - アウトラインボタン

**サイズ:**
- `sm` - スモール
- `md` - ミディアム（デフォルト）
- `lg` - ラージ

### Card Recipe

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

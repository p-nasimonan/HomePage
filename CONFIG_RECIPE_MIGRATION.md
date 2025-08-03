# Config Recipe 移行完了

すべてのレシピをConfig Recipeに移行しました！

## 📁 新しいディレクトリ構造

```
src/
  theme/
    recipes/
      button.recipe.ts      # ボタンコンポーネント
      badge.recipe.ts       # バッジコンポーネント
      card.recipe.ts        # カードコンポーネント
      post-card.recipe.ts   # 投稿カード（レシピ + スロットレシピ）
      index.ts             # 全レシピのエクスポート
```

## 🔧 使用方法

### Before（Atomic Recipe）
```tsx
import { button } from '../../../styled-system/css'

// 使用
<button className={button({ variant: 'primary', size: 'md' })}>
  Click me
</button>
```

### After（Config Recipe）
```tsx
import { button } from '../../../styled-system/recipes'

// 使用方法は同じ
<button className={button({ variant: 'primary', size: 'md' })}>
  Click me
</button>
```

## ⭐ Config Recipeの利点

1. **型安全性**: より良いTypeScriptサポート
2. **中央管理**: `panda.config.ts`で一元管理
3. **再利用性**: プロジェクト間での共有が容易
4. **保守性**: デザインシステムの一貫性を保ちやすい
5. **拡張性**: 新しいバリアントの追加が簡単

## 🚀 利用可能なレシピ

- `button` - ボタンコンポーネント
- `badge` - バッジコンポーネント  
- `card` - カードコンポーネント
- `postCard` - 投稿カードコンポーネント
- `postCardSlot` - 投稿カードのスロットレシピ（複数要素）

## 📝 次のステップ

既存のコンポーネントファイルで以下を変更してください：

```tsx
// 変更前
import { button } from '../components/recipes'

// 変更後  
import { button } from '../../../styled-system/recipes'
```

すべてのレシピがビルド時に生成され、`styled-system/recipes`から利用できます！

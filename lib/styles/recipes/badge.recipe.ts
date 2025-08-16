import { defineRecipe } from '@pandacss/dev';

export const badgeRecipe = defineRecipe({
  className: 'badge',
  description: 'バッジコンポーネントのスタイル',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    fontWeight: '500',
    fontSize: '12px',
    padding: '4px 12px',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: 'semantic.primary.DEFAULT',
        color: 'white',
      },
      secondary: {
        backgroundColor: 'semantic.accent.DEFAULT',
        color: 'semantic.text.primary',
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'semantic.primary.DEFAULT',
        border: '1px solid',
        borderColor: 'semantic.primary.DEFAULT',
      },
    },
    size: {
      sm: {
        fontSize: '10px',
        padding: '2px 8px',
      },
      md: {
        fontSize: '12px',
        padding: '4px 12px',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

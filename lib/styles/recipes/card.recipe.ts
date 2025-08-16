import { defineRecipe } from '@pandacss/dev';

export const cardRecipe = defineRecipe({
  className: 'card',
  description: 'カードコンポーネントのスタイル',
  base: {
    backgroundColor: 'semantic.background.primary',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    _hover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
    },
  },
  variants: {
    size: {
      sm: {
        padding: '16px',
      },
      md: {
        padding: '24px',
      },
      lg: {
        padding: '32px',
      },
    },
    variant: {
      default: {
        border: '1px solid',
        borderColor: 'semantic.border.light',
      },
      elevated: {
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      },
      cream: {
        backgroundColor: 'brand.cream',
        border: '1px solid',
        borderColor: 'semantic.border.medium',
      },
      mint: {
        backgroundColor: 'brand.mint',
        border: '1px solid',
        borderColor: 'semantic.primary.light',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

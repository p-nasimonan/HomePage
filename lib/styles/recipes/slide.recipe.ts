import { defineRecipe } from '@pandacss/dev';

export const slideRecipe = defineRecipe({
  className: 'slide',
  description: 'スライドショーコンテナのスタイル',
  base: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    borderRadius: '12px',
    backgroundColor: 'semantic.background.secondary',
  },
  variants: {
    size: {
      sm: {
        height: '200px',
      },
      md: {
        height: '300px',
      },
      lg: {
        height: '400px',
      },
      xl: {
        height: '500px',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const slideItemRecipe = defineRecipe({
  className: 'slide-item',
  description: 'スライドアイテムのスタイル',
  base: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    opacity: '0',
    transition: 'all 0.5s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    state: {
      active: {
        opacity: '1',
        transform: 'translateX(0)',
      },
      next: {
        opacity: '0',
        transform: 'translateX(100%)',
      },
      prev: {
        opacity: '0',
        transform: 'translateX(-100%)',
      },
    },
  },
  defaultVariants: {
    state: 'next',
  },
});

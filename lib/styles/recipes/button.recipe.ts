import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
  className: 'btn',
  description: 'ボタンコンポーネントのスタイル',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    borderRadius: '8px',
    transition: 'all 0.2s',
    cursor: 'pointer',
    border: 'none',
    textDecoration: 'none',
    _hover: {
      transform: 'translateY(-1px)',
    },
    _active: {
      transform: 'translateY(0)',
    },
  },
  variants: {
    size: {
      sm: {
        padding: '8px 16px',
        fontSize: '14px',
      },
      md: {
        padding: '12px 24px',
        fontSize: '16px',
      },
      lg: {
        padding: '16px 32px',
        fontSize: '18px',
      },
    },
    variant: {
      primary: {
        backgroundColor: 'semantic.primary.DEFAULT',
        color: 'white',
        _hover: {
          backgroundColor: 'semantic.primary.light',
        },
      },
      secondary: {
        backgroundColor: 'semantic.accent.DEFAULT',
        color: 'semantic.text.primary',
        _hover: {
          backgroundColor: 'semantic.accent.light',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'semantic.primary.DEFAULT',
        border: '1px solid',
        borderColor: 'semantic.primary.DEFAULT',
        _hover: {
          backgroundColor: 'semantic.primary.DEFAULT',
          color: 'white',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

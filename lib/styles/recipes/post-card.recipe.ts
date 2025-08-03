import { defineRecipe, defineSlotRecipe } from '@pandacss/dev';

// メインの投稿カードレシピ
export const postCardRecipe = defineRecipe({
  className: 'postCard',
  description: '投稿カードコンポーネントのスタイル',
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
      featured: {
        border: '2px solid',
        borderColor: 'brand.teal',
        boxShadow: '0 8px 25px rgba(115, 199, 199, 0.2)',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

// 投稿カードの複合コンポーネント用のスロットレシピ
export const postCardSlotRecipe = defineSlotRecipe({
  className: 'postCardSlot',
  description: '投稿カードの要素スタイル',
  slots: ['root', 'image', 'content', 'meta', 'title', 'description', 'readMore'],
  base: {
    root: {
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
    image: {
      width: '100%',
      height: '200px',
      overflow: 'hidden',
    },
    content: {
      padding: '1.5rem',
    },
    meta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
      fontSize: '0.9rem',
      color: 'semantic.text.secondary',
    },
    title: {
      marginBottom: '1rem',
      fontSize: '1.2rem',
      color: 'semantic.text.primary',
      textDecoration: 'none',
      _hover: {
        color: 'brand.teal',
      },
    },
    description: {
      color: 'semantic.text.secondary',
      marginBottom: '1rem',
      lineHeight: '1.6',
    },
    readMore: {
      color: 'brand.teal',
      textDecoration: 'none',
      fontWeight: '500',
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
  variants: {
    variant: {
      default: {
        root: {
          border: '1px solid',
          borderColor: 'semantic.border.light',
        },
      },
      featured: {
        root: {
          border: '2px solid',
          borderColor: 'brand.teal',
          boxShadow: '0 8px 25px rgba(115, 199, 199, 0.2)',
        },
        title: {
          color: 'brand.teal',
        },
      },
    },
    size: {
      sm: {
        content: {
          padding: '1rem',
        },
        title: {
          fontSize: '1rem',
        },
      },
      md: {
        content: {
          padding: '1.5rem',
        },
        title: {
          fontSize: '1.2rem',
        },
      },
      lg: {
        content: {
          padding: '2rem',
        },
        title: {
          fontSize: '1.4rem',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

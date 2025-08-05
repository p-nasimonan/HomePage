/**
 * Anko-UI Card Stack Recipe
 * カードスタック式スライドショー用のPanda CSSレシピ
 */

import { defineSlotRecipe } from '@pandacss/dev'

export const cardStackSlotRecipe = defineSlotRecipe({
  className: 'card-stack',
  description: 'Anko-UI カードスタック式スライドショーのスロットレシピ',
  slots: ['container', 'stackContainer', 'card', 'content', 'title', 'description', 'date', 'tags', 'tag', 'link', 'info', 'counter', 'hint'],
  base: {
    container: {
      position: 'relative',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      perspective: '1000px',
      overflow: 'visible'
    },
    stackContainer: {
      position: 'relative',
      width: '100%',
      height: '100%',
      cursor: 'grab',
      transformStyle: 'preserve-3d',
      _active: {
        cursor: 'grabbing'
      }
    },
    card: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      transformStyle: 'preserve-3d',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '2rem',
      textAlign: 'center',
      color: 'white',
      background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))',
      backdropFilter: 'blur(2px)'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      lineHeight: '1.2',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
    },
    description: {
      fontSize: '1.125rem',
      marginBottom: '1.5rem',
      maxWidth: '600px',
      lineHeight: '1.6',
      opacity: '0.9',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
    },
    date: {
      background: 'rgba(255, 255, 255, 0.2)',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.875rem',
      marginBottom: '1rem',
      backdropFilter: 'blur(4px)'
    },
    tags: {
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '1.5rem'
    },
    tag: {
      background: 'rgba(255, 255, 255, 0.2)',
      padding: '0.25rem 0.75rem',
      borderRadius: '15px',
      fontSize: '0.75rem',
      backdropFilter: 'blur(4px)'
    },
    link: {
      display: 'inline-block',
      background: 'white',
      color: '#667eea',
      padding: '0.75rem 2rem',
      borderRadius: '25px',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'all 0.2s',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
      _hover: {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)'
      }
    },
    info: {
      position: 'absolute',
      bottom: '-60px',
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      color: 'gray.500'
    },
    counter: {
      fontSize: '1.125rem',
      fontWeight: '600',
      color: 'gray.700',
      marginBottom: '0.5rem',
      display: 'block'
    },
    hint: {
      fontSize: '0.875rem',
      margin: '0',
      opacity: '0.7'
    }
  },
  variants: {
    size: {
      sm: {
        container: { height: '300px' },
        title: { fontSize: '1.25rem' },
        description: { fontSize: '1rem' },
        content: { padding: '1.5rem' }
      },
      md: {
        container: { height: '400px' },
        title: { fontSize: '1.5rem' },
        description: { fontSize: '1rem' },
        content: { padding: '1.5rem' }
      },
      lg: {
        container: { height: '500px' },
        title: { fontSize: '2rem' },
        description: { fontSize: '1.125rem' },
        content: { padding: '2rem' }
      },
      xl: {
        container: { height: '600px' },
        title: { fontSize: '2.5rem' },
        description: { fontSize: '1.25rem' },
        content: { padding: '2.5rem' }
      }
    },
    rounded: {
      none: {
        card: { borderRadius: '0' }
      },
      sm: {
        card: { borderRadius: '8px' }
      },
      md: {
        card: { borderRadius: '16px' }
      },
      lg: {
        card: { borderRadius: '24px' }
      },
      xl: {
        card: { borderRadius: '32px' }
      }
    },
    theme: {
      gradient1: {
        card: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }
      },
      gradient2: {
        card: { background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }
      },
      gradient3: {
        card: { background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }
      },
      gradient4: {
        card: { background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }
      },
      teal: {
        card: { background: 'linear-gradient(135deg, {colors.teal.400} 0%, {colors.teal.600} 100%)' }
      },
      gray: {
        card: { background: 'linear-gradient(135deg, {colors.gray.400} 0%, {colors.gray.600} 100%)' }
      }
    }
  },
  defaultVariants: {
    size: 'md',
    rounded: 'md',
    theme: 'gradient1'
  }
})

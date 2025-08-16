/**
 * Anko-UI Dropdown Recipe
 * ドロップダウンメニュー用のPanda CSSレシピ
 */

import { defineSlotRecipe } from '@pandacss/dev'

export const dropdownSlotRecipe = defineSlotRecipe({
  className: 'dropdown',
  description: 'Anko-UI ドロップダウンメニューコンポーネント',
  slots: ['trigger', 'content', 'item'],
  base: {
    trigger: {
      position: 'relative',
      cursor: 'pointer',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '100%',
        left: '0',
        right: '0',
        height: '0.75rem',
        background: 'transparent',
        zIndex: '999'
      }
    },
    content: {
      position: 'absolute',
      top: '100%',
      left: '0',
      minWidth: '150px',
      background: 'white',
      border: '1px solid',
      borderColor: 'gray.200',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      zIndex: '1000',
      marginTop: '0.75rem',
      opacity: '0',
      transform: 'translateY(-10px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      pointerEvents: 'none',
      '&[data-state="open"]': {
        opacity: '1',
        transform: 'translateY(0)',
        pointerEvents: 'auto'
      }
    },
    item: {
      display: 'block',
      padding: '0.75rem 1rem',
      color: 'gray.700',
      textDecoration: 'none',
      borderBottom: '1px solid',
      borderColor: 'gray.100',
      transition: 'background 0.2s',
      _hover: { 
        background: 'gray.50' 
      },
      _last: {
        borderBottom: 'none'
      }
    }
  },
  variants: {
    size: {
      sm: {
        content: { minWidth: '120px' },
        item: { padding: '0.5rem 0.75rem', fontSize: '0.875rem' }
      },
      md: {
        content: { minWidth: '150px' },
        item: { padding: '0.75rem 1rem', fontSize: '1rem' }
      },
      lg: {
        content: { minWidth: '200px' },
        item: { padding: '1rem 1.25rem', fontSize: '1.125rem' }
      }
    },
    animation: {
      fade: {
        content: {
          transition: 'opacity 0.2s ease-in-out',
          transform: 'none',
          '&[data-state="open"]': {
            transform: 'none'
          }
        }
      },
      slide: {
        content: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: 'translateY(-10px)',
          '&[data-state="open"]': {
            transform: 'translateY(0)'
          }
        }
      },
      scale: {
        content: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: 'translateY(-10px) scale(0.95)',
          '&[data-state="open"]': {
            transform: 'translateY(0) scale(1)'
          }
        }
      }
    },
    position: {
      left: {
        content: { left: '0' }
      },
      right: {
        content: { right: '0', left: 'auto' }
      },
      center: {
        content: { left: '50%', transform: 'translateX(-50%) translateY(-10px)' }
      }
    }
  },
  defaultVariants: {
    size: 'md',
    animation: 'slide',
    position: 'left'
  }
})

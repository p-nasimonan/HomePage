/**
 * Anko-UI Slideshow Recipe
 * スライドショーコンポーネント用のPanda CSSレシピ
 */

import { defineRecipe, defineSlotRecipe } from '@pandacss/dev'

export const slideshowRecipe = defineRecipe({
  className: 'slideshow',
  description: 'Anko-UI スライドショーコンポーネント',
  base: {
    position: 'relative',
    maxWidth: '100%',
    margin: 'auto',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  variants: {
    size: {
      sm: {
        minHeight: '250px'
      },
      md: {
        minHeight: '350px'
      },
      lg: {
        minHeight: '450px'
      },
      xl: {
        minHeight: '550px'
      }
    },
    rounded: {
      none: { borderRadius: '0' },
      sm: { borderRadius: '8px' },
      md: { borderRadius: '12px' },
      lg: { borderRadius: '16px' },
      xl: { borderRadius: '24px' }
    }
  },
  defaultVariants: {
    size: 'md',
    rounded: 'md'
  }
})

export const slideshowSlotRecipe = defineSlotRecipe({
  className: 'slideshow-slot',
  description: 'Anko-UI スライドショーのスロットレシピ',
  slots: ['container', 'slides', 'slide', 'button', 'indicators', 'indicator'],
  base: {
    container: {
      position: 'relative',
      maxWidth: '100%',
      margin: 'auto',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    slides: {
      display: 'flex',
      transition: 'transform 0.3s ease-in-out',
      height: '100%'
    },
    slide: {
      flex: '0 0 100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    },
    button: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,0.2)',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      _hover: {
        background: 'rgba(255,255,255,0.3)',
        transform: 'translateY(-50%) scale(1.1)'
      }
    },
    indicators: {
      position: 'absolute',
      bottom: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px'
    },
    indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      border: '2px solid white',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.2s',
      _hover: {
        transform: 'scale(1.2)'
      }
    }
  },
  variants: {
    size: {
      sm: {
        container: { minHeight: '250px' },
        button: { width: '35px', height: '35px', fontSize: '1rem' }
      },
      md: {
        container: { minHeight: '350px' },
        button: { width: '45px', height: '45px', fontSize: '1.25rem' }
      },
      lg: {
        container: { minHeight: '450px' },
        button: { width: '55px', height: '55px', fontSize: '1.5rem' }
      },
      xl: {
        container: { minHeight: '550px' },
        button: { width: '65px', height: '65px', fontSize: '1.75rem' }
      }
    },
    theme: {
      gradient1: {
        slide: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }
      },
      gradient2: {
        slide: { background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }
      },
      gradient3: {
        slide: { background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }
      },
      gradient4: {
        slide: { background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }
      },
      teal: {
        slide: { background: 'linear-gradient(135deg, {colors.teal.400} 0%, {colors.teal.600} 100%)' }
      },
      gray: {
        slide: { background: 'linear-gradient(135deg, {colors.gray.400} 0%, {colors.gray.600} 100%)' }
      }
    },
    direction: {
      prev: {
        button: { left: '20px' }
      },
      next: {
        button: { right: '20px' }
      }
    },
    active: {
      true: {
        indicator: { background: 'white' }
      },
      false: {
        indicator: { background: 'transparent' }
      }
    }
  },
  defaultVariants: {
    size: 'md',
    theme: 'gradient1'
  }
})

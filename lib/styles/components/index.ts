/**
 * Anko-UI Components Types
 * デザインシステムコンポーネントの型定義
 */

// Slideshow Component Types
export interface SlideshowSlide {
  title: string;
  description: string;
  image?: string;
  link?: string;
  linkText?: string;
  pubDate?: Date;
  tags?: string[];
  theme?: 'gradient1' | 'gradient2' | 'gradient3' | 'gradient4' | 'teal' | 'gray';
}

export interface SlideshowProps {
  slides: SlideshowSlide[];
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showNavigation?: boolean;
  showIndicators?: boolean;
  className?: string;
}

// 他のコンポーネント型もここに追加できます
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

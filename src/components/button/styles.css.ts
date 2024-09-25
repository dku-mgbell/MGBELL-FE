import { borderRadius, colors, fontWeight } from '@/styles/constant';
import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
  base: {
    fontWeight: fontWeight.bold,
    padding: '16px 0',
    borderRadius: borderRadius.md,
    color: colors.white,
  },
  variants: {
    color: {
      primary: { backgroundColor: colors.primary },
      secondary: { backgroundColor: colors.secondary },
    },
    size: {
      full: { width: '100%' },
      fit: { width: 'fit' },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'full',
  },
});

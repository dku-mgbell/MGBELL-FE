import { recipe } from '@vanilla-extract/recipes';
import { borderRadius, colors, fontWeight } from '../../styles/constant';

export const button = recipe({
  base: {
    fontWeight: fontWeight.bold,
    padding: '16px 0',
    borderRadius: borderRadius.md,
    color: colors.white,
  },
  variants: {
    theme: {
      primary: { backgroundColor: colors.primary },
      secondary: { backgroundColor: colors.secondary },
    },
    size: {
      full: { width: '100%' },
      fit: { width: 'fit' },
    },
  },
  defaultVariants: {
    theme: 'primary',
    size: 'full',
  },
});

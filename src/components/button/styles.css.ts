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
      'inactive-primary': {
        backgroundColor: colors.lightGray10,
        color: colors.primary,
      },
      'inactive-secondary': {
        backgroundColor: colors.lightGray10,
        color: colors.secondary,
      },
      'light-yellow': {
        backgroundColor: '#FFF0D1',
        border: `1.2px solid ${colors.primary}`,
        color: '#5D5D5D',
        fontSize: 14,
        padding: '10px 0',
      },
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

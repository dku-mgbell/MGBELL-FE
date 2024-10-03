import { recipe } from '@vanilla-extract/recipes';
import { borderRadius, colors, fontWeight } from '@/styles/constant';

export const textarea = recipe({
  base: {
    height: '8.5rem',
    fontSize: 16,
    color: colors.darkGray300,
    padding: '1.2rem',
    boxSizing: 'border-box',
    fontWeight: fontWeight.md,
    borderRadius: borderRadius.md,
    backgroundColor: colors.lightGray10,
    '::placeholder': {
      color: colors.lightGray150,
    },
  },
  variants: {
    theme: {
      default: {},
      error: { border: `1px solid ${colors.error}` },
      'outline-secondary': { border: `1.5px solid ${colors.secondary}` },
    },
  },
  defaultVariants: {
    theme: 'default',
  },
});

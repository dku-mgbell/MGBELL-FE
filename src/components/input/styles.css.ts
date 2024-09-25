import { recipe } from '@vanilla-extract/recipes';
import { borderRadius, colors, fontWeight } from '../../styles/constant';

export const input = recipe({
  base: {
    height: 50,
    fontSize: 16,
    color: colors.darkGray300,
    padding: '0 14px',
    boxSizing: 'content-box',
    fontWeight: fontWeight.bold,
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
    },
  },
  defaultVariants: {
    theme: 'default',
  },
});

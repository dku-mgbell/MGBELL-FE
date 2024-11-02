import { recipe } from '@vanilla-extract/recipes';
import { borderRadius, colors, fontWeight } from '@/styles/constant';
import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: colors.lightGray10,
  padding: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: borderRadius.md,
});

export const textarea = recipe({
  base: {
    height: '8.5rem',
    fontSize: 16,
    color: colors.darkGray300,
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

export const count = style({
  fontSize: 14,
  display: 'flex',
  justifyContent: 'end',
});

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors } from '@/styles/constant';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const message = recipe({
  base: {
    fontSize: 14,
    marginTop: 8,
    padding: '0 14px',
    lineHeight: 1.4,
  },
  variants: {
    theme: {
      default: { color: colors.primary },
      error: { color: colors.error },
    },
  },
  defaultVariants: {
    theme: 'default',
  },
});

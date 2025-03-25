import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/constant';
import { recipe } from '@vanilla-extract/recipes';

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

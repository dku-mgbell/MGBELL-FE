import { borderRadius, colors } from '@/styles/constant';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const input = recipe({
  base: {
    width: '100%',
    backgroundColor: colors.lightGray10,
    borderRadius: 10,
    selectors: {
      '&::placeholder': {
        color: '#AEAEAE',
      },
    },
  },
  variants: {
    error: {
      true: {
        border: `1px solid ${colors.error}`,
      },
    },
  },
});

export const timeInputContainer = style({
  backgroundColor: colors.lightGray10,
  color: colors.darkGray300,
  borderRadius: borderRadius.md,
  display: 'flex',
  height: 50,
  padding: '0 14px',
});
export const timeInputMessage = style({
  color: colors.lightGray150,
  lineHeight: '50px',
  width: '100%',
  zIndex: 1,
});
export const pickupMessage = style({
  color: '#AEAEAE',
  fontSize: 14,
  position: 'relative',
  top: -8,
});

export const message = style({
  color: '#AEAEAE',
  position: 'relative',
  top: -30,
  fontSize: 14,
});

import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/constant';
import { recipe } from '@vanilla-extract/recipes';

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: 8,
});

export const storeName = style({
  fontSize: 18,
  color: colors.white,
});

export const flexRowBetween = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
});

export const text = recipe({
  base: {
    fontSize: 14,
    letterSpacing: '-0.8px',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  variants: {
    color: {
      black: { color: '#000' },
      gray: { color: '#8F8F8F' },
      red: { color: '#EF444D', fontSize: 18 },
    },
  },
});

export const costPrice = style({
  fontSize: 14,
  color: '#B9B9B9',
});

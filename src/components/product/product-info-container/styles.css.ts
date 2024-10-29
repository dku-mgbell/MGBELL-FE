import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    justifyContent: 'space-around',
  },
  variants: {
    isPadding: {
      true: {
        padding: '0 1.4rem',
      },
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const storeName = style({ fontSize: 19 });

export const address = style({
  color: '#A9A9A9',
  fontSize: 16,
  marginBottom: '0.5rem',
});

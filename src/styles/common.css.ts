import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const common = {
  pointer: style({
    cursor: 'pointer',
  }),
  hidden: style({
    display: 'none',
  }),
  flexBox: recipe({
    base: {
      display: 'flex',
    },
    variants: {
      direction: {
        row: { flexDirection: 'row' },
        column: { flexDirection: 'column' },
      },
      gap: {
        5: { gap: 5 },
        10: { gap: 10 },
        15: { gap: 15 },
        20: { gap: 20 },
      },
      justify: {
        between: { justifyContent: 'space-between' },
        center: { justifyContent: 'center' },
      },
    },
    defaultVariants: {
      direction: 'column',
      gap: 5,
    },
  }),
};

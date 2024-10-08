import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors } from './constant';

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
        45: { gap: 45 },
      },
      justify: {
        between: { justifyContent: 'space-between' },
        center: { justifyContent: 'center' },
      },
      align: {
        center: { alignItems: 'center' },
      },
    },
    defaultVariants: {
      direction: 'column',
      gap: 5,
    },
  }),
  text: recipe({
    base: { fontSize: 'inherit' },
    variants: {
      color: {
        gray: { color: '#8F8F8F' },
        red: { color: '#EF444D' },
        primary: { color: colors.primary },
      },
    },
  }),
};

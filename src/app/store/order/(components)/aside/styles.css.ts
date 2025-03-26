import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors } from '@/styles/constant';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 100,
  backgroundColor: colors.white,
});

export const tab = recipe({
  base: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    borderBottom: '1px solid #e6e6e6',
    width: '100%',
    justifyContent: 'center',
    color: '#aaa',
    fontWeight: 'bold',
    fontSize: 18,
  },
  variants: {
    active: {
      true: {
        color: colors.primary,
      },
    },
  },
});

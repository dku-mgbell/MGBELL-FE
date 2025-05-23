import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors, fontWeight } from '@/styles/constant';

export const container = style({
  display: 'flex',
  position: 'absolute',
  top: 50,
  height: 50,
  backgroundColor: `${colors.primary}33`,
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const tab = recipe({
  base: {
    flex: '1',
    textAlign: 'center',
    color: '#999',
    fontWeight: fontWeight.bold,
    fontSize: 17,
  },
  variants: {
    active: {
      true: {
        color: colors.primary,
      },
    },
  },
});

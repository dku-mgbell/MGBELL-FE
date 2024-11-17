import { borderRadius, colors } from '@/styles/constant';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  padding: 20,
  gap: 20,
});

export const storeActiveText = recipe({
  base: {
    color: colors.white,
    backgroundColor: colors.lightGray250,
    width: 'fit-content',
    borderRadius: borderRadius.lg,
    padding: '5px 8px',
    marginLeft: -5,
    fontSize: 14,
  },
  variants: {
    active: {
      true: {
        backgroundColor: colors.secondary,
      },
    },
  },
});

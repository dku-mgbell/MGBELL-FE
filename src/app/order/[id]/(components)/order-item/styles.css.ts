import { borderRadius, colors, fontWeight } from '@/styles/constant';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '4px 0',
  marginBottom: 15,
});

export const orderState = recipe({
  base: {
    fontSize: 18,
  },
  variants: {
    orderState: {
      REQUESTED: {
        color: colors.primary,
      },
      ACCEPTED: {
        color: colors.secondary,
      },
      COMPLETED: {
        color: '#929292',
      },
      USER_CANCELED: {
        color: colors.error,
      },
      OWNER_REFUSED: { color: colors.error },
    },
  },
});

export const orderInfoContainer = style({
  display: 'flex',
  gap: 13,
  justifyContent: 'space-between',
});

export const thumbnail = style({
  width: 109,
  height: 86,
  borderRadius: borderRadius.md,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const orderInfoSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
  justifyContent: 'space-between',
  height: 70,
  maxHeight: 86,
  width: 'calc(100% - 130px)',
});

export const storeName = style({
  fontSize: 18,
  fontWeight: fontWeight.bold,
});

export const bagInfo = style({
  color: '#6D6D6D',
});

export const orderInfoText = style({
  fontSize: 14,
  color: '#B3B3B3',
});

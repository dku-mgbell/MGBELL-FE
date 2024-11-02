import { borderRadius, colors, fontWeight } from '@/styles/constant';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px 0',
  gap: 8,
  borderBottom: '0.5px solid #D9D9D9',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const headerOrderInfo = style({
  display: 'flex',
  gap: '0.5rem',
});

export const date = style({
  color: '#AEAEAE',
  fontSize: 15,
});

export const orderState = recipe({
  base: {
    fontSize: 15,
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

export const orderDetailButton = style({
  borderRadius: 18,
  color: '#8F8F8F',
  background: '#F6F6F6',
  fontSize: 12,
  padding: '6px 10px',
});

export const orderInfoContainer = style({
  display: 'flex',
  gap: 13,
});

export const thumbnail = style({
  width: 83,
  height: 72,
  borderRadius: borderRadius.md,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const orderInfoSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
});

export const storeName = style({
  fontSize: 17,
  fontWeight: fontWeight.bold,
  display: 'flex',
  gap: 5,
  alignItems: 'center',
});

export const bagInfo = style({
  color: '#6D6D6D',
});

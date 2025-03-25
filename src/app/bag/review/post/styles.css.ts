import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/constant';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 45,
});

export const primaryText = style({
  color: colors.primary,
  marginLeft: 2,
});

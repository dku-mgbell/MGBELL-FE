import { colors } from '@/styles/constant';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 45,
});

export const primaryText = style({
  color: colors.primary,
  marginLeft: 2,
});

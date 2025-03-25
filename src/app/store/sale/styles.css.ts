import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/constant';

export const container = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  padding: 20,
  gap: 20,
  height: '100%',
});

export const description = style({
  fontSize: 14,
  lineHeight: 1.4,
  color: colors.darkGray200,
});

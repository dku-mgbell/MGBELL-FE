import { colors, fontWeight } from '@/styles/constant';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 10,
  position: 'absolute',
  width: '100vw',
  left: 0,
  alignItems: 'center',
  gap: 20,
});

export const image = style({
  width: '100%',
  height: 300,
});

export const message = style({
  fontSize: 24,
  lineHeight: 1.6,
  fontWeight: fontWeight.bold,
  textAlign: 'center',
});

export const messageDetail = style({
  color: colors.lightGray150,
});

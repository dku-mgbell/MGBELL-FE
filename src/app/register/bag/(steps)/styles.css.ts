import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 48,
});

export const imageSection = style({
  alignSelf: 'center',
});

globalStyle(`${imageSection} img`, {
  margin: '0 0 10px -20px',
});

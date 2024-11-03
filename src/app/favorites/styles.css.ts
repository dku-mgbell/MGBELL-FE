import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflow: 'auto',
  height: '100%',
});

export const listItem = style({
  marginTop: 20,
});

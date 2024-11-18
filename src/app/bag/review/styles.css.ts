import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 20,
  gap: 12,
  height: 'calc(100vh - 30px)',
  overflow: 'auto',
});

export const hr = style({
  border: '0.8px solid #EFEFEF',
});

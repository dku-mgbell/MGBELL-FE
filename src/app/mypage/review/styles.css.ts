import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
  overflow: 'auto',
  height: 'calc(100dvh - 40px)',
});

export const title = style({
  padding: '15px 0',
  borderBottom: '1px solid #EFEFEF',
  fontSize: 18,
  fontWeight: 'bold',
});

export const reviewList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 45,
});

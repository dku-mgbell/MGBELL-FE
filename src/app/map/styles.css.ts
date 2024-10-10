import { globalStyle, style } from '@vanilla-extract/css';

export const modalContainer = style({
  padding: '0 1.4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
  justifyContent: 'space-around',
});

export const modalHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const tagContainer = style({
  display: 'flex',
  gap: '0.4rem',
});

// 가게 이름
globalStyle(`${modalContainer} strong`, {
  fontSize: 19,
});

export const address = style({
  color: '#A9A9A9',
  fontSize: 16,
  marginBottom: '0.5rem',
});

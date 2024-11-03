import { style } from '@vanilla-extract/css';

export const orderTable = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
  borderBottom: '1px solid #D9D9D9',
  paddingBottom: 20,
});

export const tableRow = style({
  display: 'flex',
});

export const tableKey = style({
  color: '#AEAEAE',
  width: 90,
});

export const tableValue = style({
  color: '#5A5A5A',
  flex: 1,
});

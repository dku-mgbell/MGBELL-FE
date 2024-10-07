import { borderRadius, colors } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';

export const collapse = style({
  backgroundColor: colors.lightGray10,
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'space-between',
  cursor: 'pointer',
  borderRadius: borderRadius.md,
  padding: 15,
  selectors: {
    '&:has(input:checked)': {},
  },
});

globalStyle(`${collapse}:has(input:checked) p`, {
  display: 'block',
  padding: 10,
  gap: 1.5,
});

globalStyle(`${collapse} div, ${collapse} p`, {
  color: '#444',
  lineHeight: 1.5,
});

export const questionList = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 15,
  gap: 15,
});

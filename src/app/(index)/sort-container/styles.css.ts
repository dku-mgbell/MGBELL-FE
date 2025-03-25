import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/constant';

export const nav = style({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 430,
});

export const button = style({
  fontSize: '3vw',
  border: `1px solid #e4e6f1`,
  // backgroundColor: '#eff2f3',
  borderRadius: 20,
  padding: '1.4vw 1.7vw',
  fontWeight: 400,
  color: '#484747',
  '@media': {
    'screen and (min-width: 431px)': {
      fontSize: '13px',
      padding: '6px 9px',
    },
  },
  selectors: {
    '&:has(input:checked)': {
      border: `1px solid ${colors.primary}50`,
      backgroundColor: '#FFF0D1',
      fontWeight: 500,
    },
  },
});

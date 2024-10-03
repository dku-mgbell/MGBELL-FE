import { colors } from '@/styles/constant';
import { style } from '@vanilla-extract/css';

export const nav = style({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 430,
});

export const button = style({
  fontSize: '3vw',
  border: `0.09rem solid #D3D3D3`,
  borderRadius: 20,
  padding: '1.4vw 1.7vw',
  '@media': {
    'screen and (min-width: 431px)': {
      fontSize: '13px',
      padding: '6px 9px',
    },
  },
  selectors: {
    '&:has(input:checked)': {
      border: `0.09rem solid ${colors.primary}`,
      backgroundColor: '#FFF0D1',
    },
  },
});

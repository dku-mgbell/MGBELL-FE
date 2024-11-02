import { colors, fontWeight } from '@/styles/constant';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const inputSection = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 50,
});

export const inputTitleContainer = recipe({
  base: {
    display: 'flex',
    gap: 8,
    fontWeight: fontWeight.bold,
    alignItems: 'center',
    marginBottom: 12,
  },
  variants: {
    border: {
      true: {
        paddingBottom: 10,
        borderBottom: '1px solid #D9D9D9',
        marginBottom: 20,
      },
    },
  },
});

export const input = recipe({
  base: {
    backgroundColor: '#F6F6F6',
    padding: '1.2rem',
    borderRadius: 10,
    selectors: {
      '&::placeholder': {
        color: '#AEAEAE',
      },
    },
  },
  variants: {
    error: {
      true: {
        border: `1px solid ${colors.error}`,
      },
    },
  },
});

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

export const pickupMessage = style({
  color: '#AEAEAE',
  fontSize: 14,
  position: 'relative',
  top: -8,
});

export const message = style({
  color: '#AEAEAE',
  position: 'relative',
  top: -30,
  fontSize: 14,
});

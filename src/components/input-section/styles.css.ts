import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { fontWeight } from '@/styles/constant';

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

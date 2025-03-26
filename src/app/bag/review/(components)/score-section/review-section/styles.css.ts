import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors, fontWeight } from '@/styles/constant';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 10,
  gap: 25,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const reviewCommentTitle = style({
  fontSize: 18,
  fontWeight: fontWeight.bold,
});
export const ownerCommentTitle = style({
  fontSize: 15,
  color: '#5A5A5A',
  marginTop: 2,
});

export const buttonContainer = style({
  display: 'flex',
  gap: 5,
});

export const button = recipe({
  base: {
    borderRadius: 19,
    padding: '8px 10px',
    fontSize: 11,
    color: colors.white,
    gap: 2,
    display: 'flex',
    alignItems: 'center',
    height: 'fit-content',
  },
  variants: {
    theme: {
      green: {
        backgroundColor: '#69D441',
      },
      primary: {
        backgroundColor: colors.primary,
      },
    },
  },
});

export const reviewSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 36,
});

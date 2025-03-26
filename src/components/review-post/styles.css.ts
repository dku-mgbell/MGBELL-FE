import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { borderRadius, colors, fontWeight } from '@/styles/constant';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 10,
  gap: 35,
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
export const reviewContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  alignItems: 'start',
});
export const reviewHeader = recipe({
  base: {
    display: 'flex',
    gap: 5,
    alignItems: 'end',
    justifyContent: 'space-between',
    width: '100%',
  },
  variants: {
    align: {
      center: { alignItems: 'center' },
    },
  },
});
export const storeName = style({
  fontWeight: fontWeight.bold,
});
export const userName = style({
  fontWeight: fontWeight.bold,
});
export const date = recipe({
  base: {
    color: '#AEAEAE',
    fontSize: 13,
    marginLeft: 5,
  },
  variants: {
    theme: { primary: { color: colors.primary } },
  },
});
export const content = style({
  color: '#6D6D6D',
  fontSize: 15,
  lineHeight: 1.3,
});
export const reasonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 5,
});
export const reasonTag = style({
  fontSize: 13,
  color: '#6d6d6d',
  border: '1.2px solid #B9B9B9',
  width: 'fit-content',
  borderRadius: 40,
  padding: '5px 12px',
  display: 'flex',
  gap: 3,
});
export const swiper = style({
  maxWidth: 500,
  margin: 0,
});
export const image = style({
  width: 168,
  height: 168,
  backgroundSize: 'cover',
  borderRadius: borderRadius.md,
  backgroundPosition: 'center',
});
export const comment = style({
  display: 'flex',
  backgroundColor: '#F3F5F7',
  borderRadius: borderRadius.md,
  width: '100%',
  flexDirection: 'column',
  padding: 15,
  gap: 8,
  marginTop: 8,
});
export const commentHeader = style({
  display: 'flex',
  gap: 5,
  alignItems: 'end',
});
export const commentWriter = style({
  fontWeight: fontWeight.bold,
});
export const commentDate = style({
  fontSize: 13,
  color: '#8F8F8F',
});
export const commentContent = style({
  fontSize: 14,
  lineHeight: 1.3,
  color: '#6D6D6D',
});

export const deleteButton = style({
  fontSize: 13,
  backgroundColor: '#F6F6F6',
  color: '#8F8F8F',
  padding: '5px 15px ',
  borderRadius: borderRadius.lg,
  justifySelf: 'end',
});

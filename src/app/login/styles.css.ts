import { globalStyle, style } from '@vanilla-extract/css';
import {
  borderRadius,
  colors,
  fontWeight,
  padding,
} from '../../styles/constant';

export const container = style({
  height: '100vh',
  overflow: 'hidden',
  paddingTop: padding.safeAreaTop,
  display: 'flex',
  flexDirection: 'column',
  gap: 7,
  backgroundColor: colors.primary,
});

export const header = style({
  height: 180,
});

export const contentWrapper = style({
  flex: 1,
  backgroundColor: colors.white,
  borderRadius: `${borderRadius.lg} ${borderRadius.lg} 0 0`,
  padding: `40px 2rem 80px`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  marginTop: 40,
});

export const input = style({
  backgroundColor: colors.lightGray10,
  '::placeholder': {
    color: colors.lightGray150,
  },
  height: 50,
  padding: '13px 18px',
  borderRadius: borderRadius.md,
});

export const loginButton = style({
  backgroundColor: colors.secondary,
  color: colors.white,
  fontWeight: fontWeight.bold,
  padding: '16px 0',
  borderRadius: borderRadius.md,
});

export const buttonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 16,
});

globalStyle(`${contentWrapper} h2`, {
  fontSize: 26,
  fontWeight: fontWeight.bold,
  marginBottom: 10,
  lineHeight: '35px',
  color: colors.black,
});

globalStyle(`${contentWrapper} p`, {
  fontSize: 15,
  color: colors.lightGray250,
});

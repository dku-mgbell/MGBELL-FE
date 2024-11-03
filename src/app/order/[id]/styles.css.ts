import { borderRadius, fontWeight } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';

export const buttonContainer = style({
  margin: '20px 0 30px 0',
});

export const multipleButtonContainer = style({
  display: 'flex',
  width: '100%',
  border: '1px solid #D9D9D9',
  height: 50,
  justifyContent: 'space-between',
  borderRadius: borderRadius.md,
  alignItems: 'center',
});

export const multipleButton = style({
  width: '50%',
  color: '#8F8F8F',
  height: '50px',
  fontSize: 13,
  fontWeight: fontWeight.bold,
});

globalStyle(`${multipleButtonContainer} span`, {
  color: '#D9D9D9',
});

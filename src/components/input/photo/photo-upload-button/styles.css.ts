import { style } from '@vanilla-extract/css';
import { fontWeight } from '@/styles/constant';

export const button = style({
  display: 'flex',
  justifyContent: 'center',
  gap: 6,
  border: '1.2px solid #d9d9d9',
  borderRadius: 10,
  padding: '14px 30px',
  justifySelf: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  marginBottom: 15,
});

export const buttonContent = style({
  color: '#929292',
  fontWeight: fontWeight.bold,
  fontSize: '1rem',
});

export const buttonMax = style({
  color: '#B9B9B9',
  fontSize: '0.7rem',
  marginBottom: '-0.3rem',
});

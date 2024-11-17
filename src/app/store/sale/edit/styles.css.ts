import { borderRadius } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  height: 'calc(100% - 65px)',
  overflow: 'auto',
});

export const buttonContainer = style({
  display: 'flex',
  gap: 15,
  position: 'fixed',
  bottom: 10,
  width: 'calc(100% - 40px)',
});

export const priceContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
});

globalStyle(`${priceContainer} label`, {
  display: 'flex',
  gap: 5,
  cursor: 'pointer',
  width: 'fit-content',
});

export const timeInputContainer = style({
  display: 'flex',
  gap: 20,
});

globalStyle(`${timeInputContainer} input`, {
  backgroundColor: '#F6F6F6',
  padding: '10px 20px',
  borderRadius: borderRadius.md,
  width: 200,
});

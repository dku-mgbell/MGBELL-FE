import { globalStyle, style } from '@vanilla-extract/css';
import { borderRadius } from '@/styles/constant';

export const buttonWrapper = style({
  backgroundColor: '#F3F5F6',
  borderRadius: borderRadius.md,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1.5rem',
  boxSizing: 'border-box',
});

export const buttonContainer = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
});

globalStyle(`${buttonContainer} span`, {
  color: '#585858',
  fontSize: 20,
  alignContent: 'center',
});

globalStyle(`${buttonContainer} button`, {
  color: '#7F7F7F',
  fontSize: 20,
  width: '30%',
});

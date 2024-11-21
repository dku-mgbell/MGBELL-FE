import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  height: '100vh',
  width: '100%',
  top: 0,
  left: 0,
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
});

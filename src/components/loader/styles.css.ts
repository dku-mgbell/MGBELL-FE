import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  height: '100vh',
  maxWidth: '450px',
  width: '100%',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ffffff99',
});

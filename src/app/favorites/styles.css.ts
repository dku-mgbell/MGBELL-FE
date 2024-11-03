import { fontWeight } from '@/styles/constant';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflow: 'auto',
  height: '100%',
});

export const listItem = style({
  marginTop: 20,
});

export const emptyMessage = style({
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -150%)',
  left: '50%',
  fontSize: 18,
  fontWeight: fontWeight.bold,
  color: '#585858',
  width: '100%',
});

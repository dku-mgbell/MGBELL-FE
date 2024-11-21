import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  position: 'absolute',
  top: 0,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  gap: 14,
  zIndex: -1,
});

export const content = style({
  display: 'flex',
  gap: 15,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
});

globalStyle(`${container} strong`, {
  fontSize: 20,
});

globalStyle(`${container} p`, {
  textAlign: 'center',
  color: '#818181',
  lineHeight: 1.5,
});

import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 24,
  gap: 14,
});

export const message = style({
  color: '#949494',
  textAlign: 'center',
  lineHeight: 1.4,
});

globalStyle(`${container} h2, ${container} strong`, {
  fontSize: 24,
  lineHeight: 1.5,
  textAlign: 'center',
});

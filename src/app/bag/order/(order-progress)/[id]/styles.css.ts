import { fontWeight } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';

export const sheet = style({
  position: 'absolute',
  width: '100vw',
  left: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: -10,
  borderRadius: '10px 10px 0 0',
  padding: '2.5rem 1.6rem 170px 1.6rem',
  boxShadow: '0px -4px 10px 2px rgba(0, 0, 0, 0.05)',
  color: '#5F5F5F ',
});

export const imageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '50vh',
  alignItems: 'center',
});

export const header = style({
  fontSize: 20,
  display: 'flex',
  gap: 7,
  fontWeight: fontWeight.bold,
  color: '#5F5F5F ',
  marginBottom: 10,
});

export const message = style({
  lineHeight: 1.7,
  color: '#5F5F5F ',
});

globalStyle(`${sheet}  strong`, {
  color: '#5F5F5F ',
});

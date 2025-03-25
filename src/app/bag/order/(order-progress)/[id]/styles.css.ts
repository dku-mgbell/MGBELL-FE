import { globalStyle, style } from '@vanilla-extract/css';
import { fontWeight } from '@/styles/constant';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const sheet = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100dvw',
  display: 'flex',
  flexDirection: 'column',
  marginTop: -10,
  borderRadius: '20px 20px 0 0',
  padding: '2rem 1.6rem calc(51px + 2.5rem) 1.6rem',
  boxShadow: '0px -4px 10px 2px rgba(0, 0, 0, 0.05)',
  color: '#5F5F5F ',
});

export const imageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
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
  paddingBottom: 10,
  fontWeight: '1rem',
});

globalStyle(`${sheet}  strong`, {
  color: '#5F5F5F ',
});

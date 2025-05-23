import { style } from '@vanilla-extract/css';
import { colors, fontWeight } from '@/styles/constant';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
});

export const header = style({
  display: 'flex',
  position: 'fixed',
  top: 0,
  justifyContent: 'end',
  width: '100%',
  maxWidth: 450,
  padding: 'calc(5px + env(safe-area-inset-top)) 25px 0 0',
  zIndex: 999,
});

export const carousel = style({
  display: 'flex',
  height: 320,
  flex: '0 0 auto',
});

export const sheet = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginTop: -10,
  borderRadius: '10px 10px 0 0',
  padding: '36px 1.2rem 80px 1.2rem',
  boxShadow: '0px -4px 10px 2px rgba(0, 0, 0, 0.05)',
});

export const descriptionSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  paddingTop: 30,
});

export const descriptionHeader = style({
  display: 'flex',
  gap: 3,
  color: '#929292',
  fontWeight: fontWeight.bold,
});

export const description = style({
  color: '#929292',
  lineHeight: 1.4,
  fontSize: '0.9rem',
});

export const footer = style({
  display: 'flex',
  position: 'fixed',
  maxWidth: '450px',
  bottom: 'env(safe-area-inset-bottom)',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '10px 1.2rem',
  backgroundColor: colors.white,
  gap: 10,
  width: '100%',
});

export const numberInput = style({
  width: 'calc(50% - 10px)',
  maxWidth: 180,
});

export const orderButton = style({
  flex: 1,
});

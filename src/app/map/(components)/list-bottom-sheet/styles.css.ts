import { style } from '@vanilla-extract/css';

export const modal = style({
  padding: '0 23px',
});

export const contentContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 10,
  gap: '0.8rem',
});

export const tagContainer = style({
  display: 'flex',
  gap: 4,
});

export const bagInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const address = style({
  color: '#8F8F8F',
  fontSize: '0.8rem',
});

export const imageWrapper = style({
  width: 111,
  height: 88,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: 20,
});

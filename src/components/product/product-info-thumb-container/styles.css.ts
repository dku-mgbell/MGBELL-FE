import { style } from '@vanilla-extract/css';

export const modal = style({
  padding: '0 23px',
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
});

export const listItem = style({
  borderBottom: '0.5px solid #D9D9D9',
  paddingBottom: 15,
});

export const contentContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 10,
  gap: '0.8rem',
});

export const bagInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  textAlign: 'left',
});

export const storeName = style({
  marginLeft: 3,
});

export const address = style({
  color: '#8F8F8F',
  fontSize: '0.8rem',
  marginLeft: 3,
});

export const imageWrapper = style({
  width: 111,
  height: 88,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: 20,
});

import { colors } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const wrapper = style({
  backgroundColor: colors.white,
  zIndex: 9999,
  position: 'fixed',
  width: '100%',
  bottom: 0,
  justifyContent: 'center',
  display: 'flex',
  boxShadow: '0px -2px 15px 2px rgba(0, 0, 0, 0.1)',
});

export const container = style({
  display: 'flex',
  width: '100%',
  maxWidth: 500,
  height: '70px',
  backgroundColor: colors.white,
  justifyContent: 'space-between',
  alignItems: 'center',
});

globalStyle(`${container} a`, {
  textAlign: 'center',
  width: '25%',
});

export const tabName = recipe({
  base: {
    fontSize: 9,
  },
  variants: {
    active: {
      true: { color: colors.primary },
      false: { color: '#A5A5A5' },
    },
  },
});

export const mapButton = style({
  backgroundColor: colors.secondary,
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  //   marginLeft: -5,
  bottom: 20,
  zIndex: 999999,
  borderRadius: '100%',
  width: 54,
  height: 54,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '5px solid white',
  boxSizing: 'content-box',
});
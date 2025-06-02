import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors } from '@/styles/constant';

export const wrapper = style({
  backgroundColor: colors.white,
  zIndex: 999,
  position: 'fixed',
  width: '100%',
  bottom: 0,
  justifyContent: 'center',
  display: 'flex',
  boxShadow: '0px -2px 15px 2px rgba(0, 0, 0, 0.1)',
  maxWidth: '450px',
  margin: '0 auto',
  left: '50%',
  transform: 'translateX(-50%)',
});

export const container = style({
  display: 'flex',
  width: '100%',
  maxWidth: 500,
  height: 'calc(60px + env(safe-area-inset-bottom) * 0.9)',
  backgroundColor: colors.white,
  justifyContent: 'space-between',
  alignItems: 'top',
  paddingTop: 12,
});

globalStyle(`${container} a`, {
  textAlign: 'center',
  width: '25%',
});

export const tabName = recipe({
  base: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  variants: {
    active: {
      true: { color: colors.gray1 },
      false: { color: colors.gray6 },
    },
  },
});

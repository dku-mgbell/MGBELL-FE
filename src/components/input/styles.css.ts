import { recipe } from '@vanilla-extract/recipes';
import { style } from '@vanilla-extract/css';
import { borderRadius, colors, fontWeight } from '../../styles/constant';

export const inputContainer = recipe({
  base: {
    height: 50,
    fontSize: 16,
    padding: '0 14px',
    boxSizing: 'content-box',
    borderRadius: borderRadius.md,
    backgroundColor: colors.lightGray10,
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    theme: {
      default: {},
      error: { border: `1px solid ${colors.error}` },
      'outline-primary': { border: `1px solid ${colors.primary}` },
      'outline-secondary': { border: `1.5px solid ${colors.secondary}` },
      'outline-gray': { border: `1px solid #D9D9D9` },
      'outline-undefined': { border: `1px solid ${colors.white}` },
    },
    onClick: {
      true: { cursor: 'pointer' },
    },
  },
  defaultVariants: {
    theme: 'default',
  },
});

export const input = style({
  flex: 1,
  fontSize: 16,
  color: colors.darkGray300,
  boxSizing: 'content-box',
  backgroundColor: 'transparent',
  fontWeight: fontWeight.md,
  '::placeholder': {
    color: colors.lightGray150,
  },
  ':disabled': {
    opacity: '100%',
  },
});

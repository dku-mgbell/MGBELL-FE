import { recipe } from '@vanilla-extract/recipes';
import { borderRadius, colors, fontWeight } from '../../../styles/constant';

export const button = recipe({
  base: {
    fontWeight: fontWeight.bold,
    color: colors.white,
    padding: '16px 0',
  },
  variants: {
    theme: {
      primary: { backgroundColor: colors.primary },
      secondary: { backgroundColor: colors.secondary },
      red: { backgroundColor: colors.red },
      gray: { backgroundColor: colors.lightGray250 },
      'inactive-primary': {
        backgroundColor: colors.lightGray10,
        color: colors.primary,
      },
      'inactive-secondary': {
        backgroundColor: colors.lightGray10,
        color: colors.secondary,
      },
      'light-yellow': {
        backgroundColor: '#FFF0D1',
        border: `1.2px solid ${colors.primary}`,
        color: '#5D5D5D',
        fontSize: 14,
        padding: '10px 0',
      },
      'outline-secondary': {
        border: `1px solid ${colors.secondary}`,
        color: colors.secondary,
        fontSize: 13,
      },
      'outline-gray': {
        border: '1px solid #D9D9D9',
        color: '#8F8F8F',
        fontSize: 13,
      },
    },
    size: {
      full: { width: '100%' },
      fit: { width: 'fit' },
    },
    rounded: {
      md: {
        borderRadius: borderRadius.md,
      },
      lg: { borderRadius: 50 },
    },
    shadow: {
      true: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      },
    },
    padding: {
      false: { padding: 0 },
    },
  },
  defaultVariants: {
    theme: 'primary',
    size: 'full',
    rounded: 'md',
    shadow: undefined,
  },
});

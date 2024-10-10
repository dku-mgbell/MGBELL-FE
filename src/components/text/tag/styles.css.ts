import { colors } from '@/styles/constant';
import { recipe } from '@vanilla-extract/recipes';

export const tag = recipe({
  base: {
    padding: '6px 10px',
    borderRadius: 20,
    fontSize: 11,
    color: colors.white,
  },
  variants: {
    theme: {
      default: { backgroundColor: colors.secondary },
      white: { backgroundColor: colors.white, color: colors.black },
      gray: { backgroundColor: '#5A5A5A' },
      primary: { backgroundColor: colors.primary },
    },
  },
  defaultVariants: {
    theme: 'default',
  },
});

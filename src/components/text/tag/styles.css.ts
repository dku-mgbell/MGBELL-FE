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
      gray: { backgroundColor: '#929292' },
      primary: { backgroundColor: colors.primary },
    },
    shadow: {
      true: {
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
      },
    },
  },
  defaultVariants: {
    theme: 'default',
  },
});

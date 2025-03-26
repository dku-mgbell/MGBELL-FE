import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { borderRadius, colors, fontWeight } from '@/styles/constant';

export const styles = {
  searchInputContainer: recipe({
    base: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      gap: 9,
      padding: '10px 15px',
      borderRadius: borderRadius.md,
      height: 'fit-content',
    },
    variants: {
      theme: {
        white: { backgroundColor: colors.white },
        lightGray: { backgroundColor: colors.lightGray10 },
      },
    },
    defaultVariants: {
      theme: 'white',
    },
  }),

  searchInput: style({
    '::placeholder': {
      color: colors.lightGray200,
      fontWeight: fontWeight.md,
    },
    backgroundColor: 'transparent',
    width: '100%',
    height: '20px',
    fontWeight: fontWeight.md,
    fontSize: 14,
  }),
};

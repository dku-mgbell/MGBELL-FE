import { fontWeight, padding } from '@/styles/constant';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const styles = {
  container: recipe({
    variants: {
      isPadding: {
        true: {
          padding: `calc(env(safe-area-inset-top) + 10px) ${padding.layoutX} calc(env(safe-area-inset-bottom) + 20px) ${padding.layoutX}`,
        },
        false: {
          padding: '0',
        },
      },
    },
    defaultVariants: {
      isPadding: false,
    },
  }),

  content: style({
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '4rem',
    minHeight: 'calc(100dvh - 80px)',
    boxSizing: 'border-box',
  }),

  title: style({
    fontSize: 17,
    fontWeight: fontWeight.bold,
    marginLeft: 5,
    marginBottom: 10,
  }),
};

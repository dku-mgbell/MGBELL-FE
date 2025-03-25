import { style } from '@vanilla-extract/css';
import { fontWeight, padding } from '@/styles/constant';
import { recipe } from '@vanilla-extract/recipes';

export const styles = {
  container: recipe({
    base: {
      height: '100%',
      paddingTop: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'auto',
    },
    variants: {
      isPadding: {
        true: {
          padding: `calc(env(safe-area-inset-top) + 10px + 1.5rem) ${padding.layoutX} calc(env(safe-area-inset-bottom) + 20px) ${padding.layoutX}`,
        },
        false: {},
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
    boxSizing: 'border-box',
    overflow: 'auto',
  }),

  title: style({
    fontSize: 17,
    fontWeight: fontWeight.bold,
    marginLeft: 5,
    marginBottom: 10,
  }),

  buttonContainer: style({
    position: 'fixed',
    bottom: 'calc(15px + env(safe-area-inset-bottom) * 0.8)',
    width: `calc(100% - ${padding.layoutX} * 2)`,
  }),
};

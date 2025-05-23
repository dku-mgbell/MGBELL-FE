import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors, fontWeight, padding } from '@/styles/constant';

export const styles = {
  container: recipe({
    base: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: `calc(env(safe-area-inset-top) + 10px) ${padding.layoutX} calc(env(safe-area-inset-bottom) + 20px) ${padding.layoutX}`,
      boxSizing: 'border-box',
      backgroundColor: colors.white,
      height:
        'calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
      '@media': {
        'all and (display-mode: standalone)': {
          height: '100vh!important',
        },
      },
    },
    variants: {
      paddingBottom: {
        false: { paddingBottom: 0 },
      },
    },
  }),
  header: style({
    display: 'flex',
    alignItems: 'center',
    maxWidth: '450px',
    margin: '0 auto',
    left: '50%',
    transform: 'translateX(-50%)',
    position: 'fixed',
    width: '100%',
    backgroundColor: colors.white,
    paddingBottom: 5,
    top: 'env(safe-area-inset-top)',
  }),
  main: style({
    paddingTop: '24px',
    overflow: 'hidden',
    height: '100%',
  }),
  title: style({
    fontSize: 17,
    fontWeight: fontWeight.bold,
    marginLeft: 5,
    marginBottom: 10,
  }),
};

globalStyle(`${styles.header} strong`, {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  fontSize: 20,
  fontWeight: fontWeight.bold,
});

globalStyle(`${styles.header} button`, {
  width: 30,
  display: 'flex',
  justifyContent: 'start',
  position: 'absolute',
  top: 0,
  left: padding.layoutX,
});

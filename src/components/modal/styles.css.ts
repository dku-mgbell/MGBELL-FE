import { borderRadius } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { buttonContainer } from '../input/number/styles.css';

export const styles = {
  wrapper: style({
    width: '100%',
    height: '100vh',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
  }),
  buttonContainer: style({
    display: 'flex',
    gap: 15,
  }),
  container: recipe({
    base: {
      maxWidth: 390,
      width: '90vw',
      maxHeight: '80vh',
      backgroundColor: 'white',
      borderRadius: borderRadius.md,
      overflow: 'hidden',
      padding: 15,
    },
    variants: {
      noPadding: { true: { padding: 10 } },
    },
  }),
  content: recipe({
    base: {
      padding: '1rem',
      fontSize: 16,
      minHeight: '4rem',
      display: 'flex',
      alignItems: 'center',
      color: '#484747',
    },
    variants: {
      noPadding: {
        true: { padding: 0 },
      },
    },
  }),
};

globalStyle(`${buttonContainer} button`, {
  flex: 1,
});

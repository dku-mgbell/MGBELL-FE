import { borderRadius } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';
import { buttonContainer } from '../input/number/styles.css';

export const styles = {
  wrapper: style({
    width: '100%',
    height: '100dvh',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  }),
  buttonContainer: style({
    display: 'flex',
    gap: 15,
  }),
  container: style({
    maxWidth: 390,
    width: '90vw',
    maxHeight: 500,
    backgroundColor: 'white',
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    padding: 15,
  }),
  content: style({
    padding: '1rem',
    fontSize: 17,
    minHeight: '4rem',
    display: 'flex',
    alignItems: 'center',
    color: '#222',
  }),
};

globalStyle(`${buttonContainer} button`, {
  flex: 1,
});

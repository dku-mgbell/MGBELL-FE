import { borderRadius } from '@/styles/constant';
import { style } from '@vanilla-extract/css';

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
  container: style({
    maxWidth: 390,
    width: '90vw',
    maxHeight: 500,
    backgroundColor: 'white',
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    padding: 10,
  }),
  content: style({
    padding: '1rem',
    fontSize: 17,
  }),
};

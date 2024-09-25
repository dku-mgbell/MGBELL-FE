import { fontWeight, padding } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100dvh',
    padding: `16px ${padding.layoutX}`,
  }),
  header: style({
    display: 'flex',
    alignItems: 'center',
  }),
  main: style({
    flex: 1,
    paddingTop: '3rem',
  }),
  footer: style({
    height: '5rem',
  }),
};

globalStyle(`${styles.header} strong`, {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  fontSize: 20,
  fontWeight: fontWeight.bold,
});

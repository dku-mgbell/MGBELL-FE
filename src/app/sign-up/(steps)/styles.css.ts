import { colors, fontWeight, padding } from '@/styles/constant';
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),
  message: style({
    color: colors.error,
    fontSize: 14,
    marginTop: 8,
    padding: '0 14px',
  }),
};

globalStyle(`${styles.header} strong`, {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  fontSize: 20,
  fontWeight: fontWeight.bold,
});

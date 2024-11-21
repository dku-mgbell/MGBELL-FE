import { borderRadius } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    display: 'flex',
    border: '1px solid #D9D9D9',
    justifyContent: 'space-between',
    borderRadius: borderRadius.md,
    padding: '10px 20px',
  }),
  buttonContainer: style({
    display: 'flex',
    backgroundColor: '#F3F5F6',
    gap: 20,
    padding: 10,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  }),
};

globalStyle(`${styles.container} span`, {
  color: '#585858',
  fontSize: 15,
  alignContent: 'center',
});

globalStyle(`${styles.container} button`, {
  color: '#7F7F7F',
});

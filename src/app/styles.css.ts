import { style } from '@vanilla-extract/css';
import { colors, padding } from './styles/constant';

export const styles = {
  body: style({
    fontFamily: 'var(--font-noto-sans)',
  }),
  container: style({
    padding: `${padding.layout}`,
    backgroundColor: colors.primary,
    height: '100vh',
  }),
  header: style({
    color: colors.white,
    fontWeight: 500,
  }),
};

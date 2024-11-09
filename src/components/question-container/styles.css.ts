import { colors } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  }),
  title: style({
    fontSize: 18,
  }),
  desc: style({
    fontSize: 15,
    color: colors.lightGray150,
    lineHeight: 1.4,
  }),
};

globalStyle(`${styles.desc} span`, {
  fontSize: 15,
  lineHeight: 1.4,
});

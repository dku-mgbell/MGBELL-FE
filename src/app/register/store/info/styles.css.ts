import { colors } from '@/styles/constant';
import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
  }),
  primaryText: style({
    color: colors.primary,
  }),
  darkGrayText: style({
    color: '#5D5D5D',
  }),
};

import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/constant';

export const verifyStyles = {
  retryButtonContainer: style({
    color: colors.primary,
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  }),
  retryButton: style({
    cursor: 'pointer',
    color: colors.primary,
    fontSize: 14,
    textDecoration: 'underline',
  }),
};

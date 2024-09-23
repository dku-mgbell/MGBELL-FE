import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import {
  borderRadius,
  colors,
  fontWeight,
  padding,
} from '../../styles/constant';

export const container = recipe({
  base: {
    height: '100vh',
    paddingTop: padding.safeAreaTop,
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
  },
  variants: {
    color: {
      primary: { backgroundColor: colors.primary },
      secondary: { backgroundColor: colors.secondary },
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

export const styles = {
  header: style({
    height: 180,
  }),

  contentWrapper: style({
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: `${borderRadius.lg} ${borderRadius.lg} 0 0`,
    padding: `40px 40px 80px`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),

  form: style({
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    marginTop: 40,
  }),

  input: style({
    backgroundColor: colors.lightGray10,
    '::placeholder': {
      color: colors.lightGray150,
    },
    height: 50,
    padding: '13px 18px',
    borderRadius: borderRadius.md,
  }),

  loginButton: style({
    backgroundColor: colors.secondary,
    color: colors.white,
    fontWeight: fontWeight.bold,
    padding: '16px 0',
    borderRadius: borderRadius.md,
  }),

  linkContainer: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.darkGray200,
    gap: 10,
    marginTop: 20,
  }),

  footer: style({
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 50,
  }),

  divider: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 17,
  }),

  snsLoginTitle: style({
    width: 110,
    textAlign: 'center',
    color: colors.lightGray200,
  }),

  hr: style({
    flex: 1,
    borderWidth: 0.5,
    color: colors.lightGray10,
  }),

  buttonContainer: style({
    display: 'flex',
    justifyContent: 'center',
    gap: 16,
  }),
};

globalStyle(`${styles.contentWrapper} h2`, {
  fontSize: 26,
  fontWeight: fontWeight.bold,
  marginBottom: 10,
  lineHeight: '35px',
});

globalStyle(`${styles.contentWrapper} p`, {
  fontSize: 15,
  color: colors.lightGray250,
});

globalStyle(`${styles.linkContainer} span`, {
  fontSize: 12,
  color: colors.lightGray100,
  fontWeight: fontWeight.bold,
});

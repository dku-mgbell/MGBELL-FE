import { borderRadius, colors, fontWeight, padding } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

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
  title: style({
    fontSize: 17,
    fontWeight: fontWeight.bold,
    marginLeft: 5,
    marginBottom: 10,
  }),
  message: recipe({
    base: {
      fontSize: 14,
      marginTop: 8,
      padding: '0 14px',
      lineHeight: 1.4,
    },
    variants: {
      theme: {
        default: { color: colors.primary },
        error: { color: colors.error },
      },
    },
    defaultVariants: {
      theme: 'default',
    },
  }),
};

export const userStyles = {
  container: style({
    width: '100%',
    display: 'flex',
    marginTop: 15,
    gap: 18,
  }),
  button: style({
    width: '50%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
    boxShadow: '0px 4px 4px 0px #00000026',
    borderRadius: borderRadius.md,
    padding: 14,
    border: `2px solid ${colors.white}`,
    selectors: {
      '&:has(input:checked)': {
        border: `2px solid ${colors.primary}`,
        backgroundColor: '#FFF8EB',
      },
    },
  }),
  image: style({
    marginBottom: 10,
  }),
};

globalStyle(`${styles.header} strong`, {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  fontSize: 20,
  fontWeight: fontWeight.bold,
});

globalStyle(`${styles.header} button`, {
  width: 30,
  display: 'flex',
  justifyContent: 'start',
});

globalStyle(`${userStyles.button} strong`, {
  fontSize: 14,
});

globalStyle(`${userStyles.button} p`, {
  fontWeight: fontWeight.light,
  fontSize: 12,
  textAlign: 'center',
  lineHeight: '16px',
});

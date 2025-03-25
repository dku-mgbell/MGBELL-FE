import { globalStyle, style } from '@vanilla-extract/css';
import { borderRadius, colors, fontWeight } from '@/styles/constant';
import { recipe } from '@vanilla-extract/recipes';

export const styles = {
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
    cursor: 'pointer',
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

globalStyle(`${userStyles.button} strong`, {
  fontSize: 14,
});

globalStyle(`${userStyles.button} p`, {
  fontWeight: fontWeight.light,
  fontSize: 12,
  textAlign: 'center',
  lineHeight: '16px',
});

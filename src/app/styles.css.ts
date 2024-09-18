import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { borderRadius, colors, fontWeight, padding } from './styles/constant';

export const styles = {
  body: style({
    fontFamily: 'var(--font-noto-sans)',
  }),

  container: style({
    height: '100vh',
    paddingTop: padding.safeAreaTop,
    backgroundColor: colors.primary,
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
  }),

  theme: styleVariants({
    undefined: { backgroundColor: colors.primary },
    list: { backgroundColor: colors.primary },
    map: { backgroundColor: colors.secondary },
  }),

  header: style({
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    padding: padding.layout,
    fontWeight: fontWeight.md,
  }),

  location: style({
    display: 'flex',
    color: colors.white,
    alignItems: 'center',
    gap: '8px',
  }),

  search: style({
    display: 'flex',
    gap: 8,
  }),

  searchInputContainer: style({
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    gap: 9,
    backgroundColor: colors.white,
    padding: '10px 15px',
    borderRadius: borderRadius.md,
  }),

  searchInput: style({
    '::placeholder': {
      color: colors.lightGray200,
      fontWeight: fontWeight.md,
    },
    width: '100%',
    height: '20px',
    fontWeight: fontWeight.md,
    fontFamily: 'var(--font-noto-sans)',
    fontSize: 14,
  }),

  filterButton: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1.2px solid #fff',
    borderRadius: borderRadius.md,
    width: 42,
    height: 40,
  }),

  contentWrapper: style({
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: `${borderRadius.lg} ${borderRadius.lg} 0 0`,
    padding: `20px ${padding.layoutX}`,
  }),

  nav: style({
    display: 'flex',
    backgroundColor: colors.lightGray50,
    flexWrap: 'wrap',
    borderRadius: borderRadius.md,
    overflow: 'hidden',
  }),

  viewButton: style({
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    padding: '10px 0',
    cursor: 'pointer',
    color: colors.darkGray100,
    selectors: {
      '&:has(input:checked)': {
        color: colors.white,
        backgroundColor: colors.primary,
      },
      '&:has(input[value=map]):has(input:checked)': {
        backgroundColor: colors.secondary,
      },
    },
  }),
};

globalStyle(`${styles.viewButton} input`, { display: 'none' });

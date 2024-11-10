import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { borderRadius, colors, fontWeight, padding } from '../styles/constant';

export const container = style({
  height: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  gap: 7,
  overflow: 'hidden',
});

export const viewButton = recipe({
  base: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    padding: '10px 0',
    cursor: 'pointer',
  },
  variants: {
    color: {
      false: { backgroundColor: colors.lightGray50, color: colors.darkGray100 },
      list: { backgroundColor: colors.primary, color: colors.white },
      map: { backgroundColor: colors.secondary, color: colors.white },
    },
  },
  defaultVariants: {
    color: false,
  },
});

export const styles = {
  body: style({
    fontFamily: 'var(--font-noto-sans)',
    overflow: 'hidden',
  }),

  header: style({
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    padding: `10px ${padding.layoutX}`,
    paddingTop: 20,
    fontWeight: fontWeight.md,
    backgroundColor: colors.primary,
    position: 'fixed',
    top: 0,
    width: '100vw',
    zIndex: 9999,
  }),

  location: style({
    display: 'flex',
    color: colors.white,
    alignItems: 'center',
    gap: '8px',
    width: 'fit-content',
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
    backgroundColor: colors.white,
    padding: `14px ${padding.layoutX}`,
    position: 'absolute',
    top: 100,
    width: '100vw',
    height: 'calc(100% - 100px)',
    overflow: 'hidden',
  }),

  nav: style({
    display: 'flex',
    backgroundColor: colors.lightGray50,
    flexWrap: 'wrap',
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    marginBottom: 20,
  }),
};

globalStyle(
  `${styles.body} button, ${styles.body} input, ${styles.body} textarea`,
  {
    fontFamily: 'var(--font-noto-sans)',
  },
);

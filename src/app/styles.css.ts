import { style } from '@vanilla-extract/css';
import { borderRadius, colors, fontWeight, padding } from './styles/constant';

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
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
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
      color: colors.lightGray100,
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
};

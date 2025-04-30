import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { borderRadius, colors, fontWeight, padding } from '@/styles/constant';

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

export const body = style({
  fontFamily: 'var(--font-noto-sans)',
  overflow: 'hidden',
  backgroundColor: '#f5f6f8',
});

globalStyle(`${body} button, ${body} input, ${body} textarea`, {
  fontFamily: 'var(--font-noto-sans)',
});

export const wrapper = style({
  maxWidth: '450px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  margin: '0 auto',
  backgroundColor: 'white',
  boxShadow: '0.2px 4px 4px 2px #00000010',
  minHeight: '100dvh',
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  fontWeight: fontWeight.md,
  backgroundColor: colors.primary,
  position: 'fixed',
  top: 0,
  width: '100%',
  maxWidth: '450px',
  zIndex: 9999,
});

export const headerContent = style({
  display: 'flex',
  gap: '14px',
  padding: `calc(10px + env(safe-area-inset-top)) ${padding.layoutX} 30px ${padding.layoutX}`,
  flexDirection: 'column',
});

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const search = style({
  display: 'flex',
  gap: 8,
});

export const searchInputContainer = style({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  gap: 9,
  backgroundColor: colors.white,
  padding: '10px 15px',
  borderRadius: borderRadius.md,
});

export const searchInput = style({
  '::placeholder': {
    color: colors.lightGray200,
    fontWeight: fontWeight.md,
  },
  width: '100%',
  height: '20px',
  fontWeight: fontWeight.md,
  fontSize: 14,
});

export const filterButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1.2px solid #fff',
  borderRadius: borderRadius.md,
  width: 42,
  height: 40,
});

export const contentWrapper = style({
  width: '100%',
  backgroundColor: colors.white,
  padding: `14px ${padding.layoutX} 14px ${padding.layoutX}`,
  overflow: 'hidden',
  borderRadius: '15px 15px 0 0',
  marginTop: 'calc(env(safe-area-inset-top) + 113px)',
  marginBottom: '80px',
});

export const nav = style({
  display: 'flex',
  backgroundColor: colors.lightGray50,
  flexWrap: 'wrap',
  borderRadius: borderRadius.md,
  overflow: 'hidden',
  marginBottom: 20,
});

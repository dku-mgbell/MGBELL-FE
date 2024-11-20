import { borderRadius, colors } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const main = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
  marginTop: 15,
  overflow: 'auto',
  height: 'calc(100% - 100px)',
});

export const thumbWrapper = style({
  overflow: 'hidden',
  position: 'relative',
});

export const thumbGrid = style({
  width: '100%',
  height: 180,
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gridTemplateRows: '1fr 1fr',
  borderRadius: borderRadius.md,
  overflow: 'hidden',
  position: 'absolute',
  //   '@media': {
  //     'screen and (min-width: 600px)': {
  //       gap: 20,
  //       gridTemplateColumns: '1fr 1fr 1fr',
  //       gridTemplateRows: '1fr',
  //     },
  //   },
});

globalStyle(`${thumbGrid} img`, {
  //   '@media': {
  //     'screen and (min-width: 600px)': {
  //       borderRadius: borderRadius.md,
  //       height: '180px',
  //     },
  //   },
});

export const imageLeft = style({
  gridColumn: '1 / 2',
  gridRow: '1 / 3',
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  borderRight: '1px solid white',
  borderRadius: '0 5px 5px 0',
  //   '@media': {
  //     'screen and (min-width: 600px)': {
  //       gridColumn: '1 / 2',
  //       gridRow: '1 ',
  //     },
  //   },
});

export const imageTopRight = style({
  gridColumn: '2 / 2',
  gridRow: '1 / 2',
  width: '100%',
  height: '90px',
  borderLeft: '1px solid white',
  borderBottom: '1px solid white',
  borderRadius: '5px 0 0 5px',
  objectFit: 'cover',

  //   '@media': {
  //     'screen and (min-width: 600px)': {
  //       gridColumn: '2 / 3',
  //       gridRow: '1 ',
  //     },
  //   },
});

export const imageBottomRight = style({
  gridColumn: '2 / 2',
  gridRow: '2 / 2',
  width: '100%',
  height: '90px',
  borderLeft: '1px solid white',
  borderTop: '1px solid white',
  borderRadius: '5px 0 0 5px',
  objectFit: 'cover',
  //   '@media': {
  //     'screen and (min-width: 600px)': {
  //       gridColumn: '3 / 3',
  //       gridRow: '1',
  //     },
  //   },
});

export const thumbContainer = style({
  width: '100%',
  height: 180,
  backgroundSize: 'contain',
  padding: 12,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
});

export const gradientyOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background:
    'linear-gradient(rgba(0, 0, 0, 0.0),rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.2))',
  pointerEvents: 'none',
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: 8,
});

export const storeName = style({
  fontSize: 18,
  color: colors.white,
});

export const flexRowBetween = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
});

export const text = recipe({
  base: {
    fontSize: 14,
    letterSpacing: '-0.8px',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  variants: {
    color: {
      gray: { color: '#8F8F8F' },
      red: { color: '#EF444D', fontSize: 18 },
    },
  },
});

export const costPrice = style({
  fontSize: 14,
  color: '#B9B9B9',
});

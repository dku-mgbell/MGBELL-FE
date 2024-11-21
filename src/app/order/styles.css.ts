import { style } from '@vanilla-extract/css';

export const container = style({
  height: 'calc(100dvh - 110px)',
  overflow: 'auto',
  '@media': {
    'all and (display-mode: standalone)': {
      height: 'calc(100vh - 200px)',
    },
  },
});

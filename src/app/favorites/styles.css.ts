import { style } from '@vanilla-extract/css';
import { fontWeight } from '@/styles/constant';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflow: 'auto',
  height: '100%',
  '@media': {
    'all and (display-mode: standalone)': {
      marginTop: -80,
      height: 'calc(100vh - 250px)',
    },
  },
});

export const listItem = style({
  marginTop: 15,
});

export const emptyMessage = style({
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -150%)',
  left: '50%',
  fontSize: 18,
  fontWeight: fontWeight.bold,
  color: '#585858',
  width: '100%',
});

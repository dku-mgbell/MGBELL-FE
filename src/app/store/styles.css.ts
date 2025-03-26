import { style } from '@vanilla-extract/css';
import { colors, fontWeight } from '@/styles/constant';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

export const header = style({
  display: 'flex',
  width: '100%',
  backgroundColor: `${colors.primary}dd`,
  padding: '0 20px',
  alignItems: 'center',
  boxShadow: '1px 1px 3px #00000020',
  gap: 20,
  height: 50,
});

export const headerMessage = style({
  color: colors.white,
  fontWeight: fontWeight.bold,
});
export const main = style({
  flex: 1,
  backgroundColor: '#f6f6f6',
});

export const mainContent = style({
  display: 'flex',
  position: 'absolute',
  top: 100,
  height: 'calc(100vh - 100px)',
  width: '100%',
});

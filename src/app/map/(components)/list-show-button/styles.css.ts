import { colors, fontWeight } from '@/styles/constant';
import { style } from '@vanilla-extract/css';

export const listShowButton = style({
  zIndex: 9999,
  position: 'absolute',
  bottom: 40,
  left: '50%',
  transform: 'translateX(-50%)',
});

export const buttonContainer = style({
  display: 'flex',
  gap: 8,
  padding: '10px 18px 10px 16px',
  color: colors.white,
  alignItems: 'center',
  fontWeight: fontWeight.bold,
  fontSize: 15,
  letterSpacing: '-0.03em',
});
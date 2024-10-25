import { colors } from '@/styles/constant';
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
  padding: '0 30px',
  color: colors.white,
  alignItems: 'center',
});

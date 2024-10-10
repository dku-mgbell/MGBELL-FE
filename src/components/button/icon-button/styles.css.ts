import { colors } from '@/styles/constant';
import { style } from '@vanilla-extract/css';

export const button = style({
  width: 45,
  height: 45,
  backgroundColor: colors.white,
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

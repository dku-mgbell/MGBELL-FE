import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/constant';

export const location = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineClamp: '1',
  maxWidth: '100%',
});

export const locationText = style({
  width: 'fit-content',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  lineClamp: '1',
  color: colors.white,
  flex: 1,
});

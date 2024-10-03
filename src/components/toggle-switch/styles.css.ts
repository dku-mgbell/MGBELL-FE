import { colors } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  display: 'inline-block',
  width: '50px',
  height: '25px',
});

export const input = style({
  opacity: 0,
  width: 0,
  height: 0,
});

export const slider = style({
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#ccc',
  transition: '0.4s',
  borderRadius: '25px',
  '::before': {
    position: 'absolute',
    content: '""',
    height: '25px',
    width: '25px',
    top: '-1px',
    backgroundColor: 'white',
    transition: '0.4s',
    borderRadius: '50%',
    border: `1px solid #ccc`,
  },
});

globalStyle(`${input}:checked + span`, {
  backgroundColor: colors.secondary,
});

globalStyle(`${input}:checked + span:before`, {
  transform: 'translateX(25px)',
  border: `1px solid ${colors.secondary}`,
});

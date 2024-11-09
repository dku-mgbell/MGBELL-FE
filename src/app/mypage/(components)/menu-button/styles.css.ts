import { style } from '@vanilla-extract/css';

export const menuButton = style({
  backgroundColor: '#F5F4F5',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 16,
  borderRadius: 10,
});

export const menuButtonIconText = style({
  display: 'flex',
  gap: 7,
  alignItems: 'center',
});

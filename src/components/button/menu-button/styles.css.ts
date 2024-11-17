import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const menuButton = recipe({
  base: {
    backgroundColor: '#F5F4F5',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    height: 'fit-content',
    cursor: 'default',
  },
  variants: {
    shadow: {
      true: { boxShadow: ' rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;' },
    },
    event: {
      true: { cursor: 'pointer' },
    },
  },
});

export const menuButtonIconText = style({
  display: 'flex',
  gap: 7,
  alignItems: 'center',
});

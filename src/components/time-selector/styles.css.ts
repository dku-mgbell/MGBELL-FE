import { style } from '@vanilla-extract/css';

export const wrapper = style({
  position: 'relative',
  display: 'inline-block',
  borderRadius: '8px',
  backgroundColor: '#f5f5f5',
  padding: '10px',
  paddingLeft: '20px',
  fontSize: '16px',
});

export const selector = style({
  appearance: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  fontSize: '16px',
  color: '#888',
  paddingRight: '40px',
  cursor: 'pointer',
  width: '100%',
});

export const icon = style({
  position: 'absolute',
  top: '50%',
  right: '10px',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
});

export const chevron = style({
  width: '16px',
  height: '16px',
  stroke: '#666', // 아이콘 색상
});

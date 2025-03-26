import { style } from '@vanilla-extract/css';
import { borderRadius, colors } from '@/styles/constant';

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  flex: 1,
  padding: 20,
  overflow: 'auto',
  height: '100%',
});
export const orderItem = style({
  backgroundColor: '#fff',
  width: '100%',
  padding: 20,
  borderRadius: 10,
  boxShadow: ' rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;',
  display: 'flex',
  gap: 30,
  alignItems: 'center',
});

export const orderHeader = style({
  color: colors.secondary,
});
export const orderBody = style({});
export const pickUpTime = style({});
export const orderNumber = style({
  fontSize: 40,
  color: colors.secondary,
});
export const orderNumberSection = style({
  width: 80,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
});
export const orderContentSection = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 10,
});
export const orderContentHeader = style({
  display: 'flex',
  gap: 8,
});

export const tag = style({
  fontSize: 13,
  padding: '3px 8px',
  backgroundColor: '#e5e5e5',
  borderRadius: borderRadius.lg,
  color: '#555',
});
export const refuseModal = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: '100%',
});
export const buttonContainer = style({
  display: 'flex',
  gap: 10,
});

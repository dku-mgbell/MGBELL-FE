import { style } from '@vanilla-extract/css';
import { colors, fontWeight } from '@/styles/constant';

export const container = style({
  backgroundColor: '#F6F6F6',
  height: 'calc(100dvh - 30px)',
  display: 'flex',
  flexDirection: 'column',
  gap: 25,
  overflow: 'auto',
  '@media': {
    'all and (display-mode: standalone)': {
      height: 'calc(100vh - 0px)',
    },
  },
});

export const settingsButton = style({
  display: 'flex',
  justifyContent: 'end',
  padding: 'env(safe-area-inset-top) 25px 0 25px',
  width: '100%',
});

export const backgroundContent = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 26,
});

export const nickName = style({
  fontWeight: fontWeight.bold,
  textAlign: 'center',
  minWidth: 100,
  minHeight: 19,
});

export const profile = style({
  width: 108,
  height: 108,
  backgroundColor: colors.primary,
  borderRadius: 40,
  marginBottom: 14,
});

export const activityContainer = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-around',
  padding: '0 15px',
});

export const activityItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
});

export const activityDivider = style({
  margin: '10px 0',
  background: '#E6E6E6',
  height: 58,
  width: 1.3,
  border: 0,
});

export const activityName = style({
  fontSize: 12,
  color: '#5A5A5A',
  fontWeight: fontWeight.bold,
  marginBottom: 5,
});

export const activityValue = style({
  backgroundColor: '#DEF3FF',
  borderRadius: 60,
  color: colors.secondary,
  fontWeight: fontWeight.bold,
  fontSize: 11,
  lineHeight: '16px',
  padding: '0 12px',
  minHeight: 11,
  minWidth: 76,
  textAlign: 'center',
});

export const sheet = style({
  maxWidth: '450px',
  margin: '0 auto',
  width: '100%',
  flex: 1,
  flexDirection: 'column',
  borderRadius: '20px 20px 0 0',
  padding: '16px 1.6rem 120px 1.6rem',
  boxShadow: '0px -4px 10px 2px rgba(0, 0, 0, 0.05)',
  color: '#5F5F5F ',
  backgroundColor: '#FFF',
});

export const imageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '50vh',
  alignItems: 'center',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
  backgroundColor: colors.white,
});

export const orderTitle = style({
  fontWeight: fontWeight.bold,
  color: '#484848',
  fontSize: 19,
});

export const orderContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 13,
  flexWrap: 'nowrap',
});

export const pickUpButton = style({
  width: '100%',
  height: 130,
  color: colors.white,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: 10,
  overflow: 'hidden',
});

export const pickUpButtonContent = style({
  backdropFilter: 'brightness(40%)',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 6,
  fontSize: 14,
  borderRadius: 10,
});
export const pickUpStore = style({
  color: colors.white,
  fontWeight: fontWeight.bold,
  fontSize: 14,
});

export const pickUpTime = style({
  color: colors.white,
  fontSize: 14,
});

export const orderPageLink = style({
  fontSize: 12,
  backgroundColor: '#F6F6F6',
  padding: '0 10px',
  lineHeight: '30px',
  borderRadius: 18,
  color: '#8F8F8F',
});

export const menuButtonContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 19,
  marginTop: 28,
});

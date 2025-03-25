import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/constant';
import { recipe } from '@vanilla-extract/recipes';

export const scoreContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 13,
});

export const scoreImageContainer = style({
  width: 91,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
export const scoreImage = style({
  padding: 2,
  boxSizing: 'content-box',
});
export const finalScoreName = style({
  color: '#6D6D6D',
  fontSize: 11,
});
export const scoreStatistic = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: 10,
});
export const scoreItem = style({
  display: 'flex',
  gap: 7,
  alignItems: 'center',
});
export const scoreNumber = recipe({
  base: {
    width: 15,
    fontSize: 11,
    color: '#AEAEAE',
  },
  variants: {
    active: {
      true: { color: colors.primary },
    },
  },
});
export const scoreGraph = style({
  width: '100%',
  height: 6,
  backgroundColor: '#EFEFEF',
  borderRadius: 27,
  flex: 1,
});
export const scoreGraphFilled = style({
  backgroundColor: colors.primary,
  height: '100%',
  borderRadius: 27,
});
export const scoreName = recipe({
  base: {
    color: '#AEAEAE',
    fontSize: 11,
    width: 52,
  },
  variants: {
    active: {
      true: {
        color: colors.primary,
      },
      false: {},
    },
  },
});

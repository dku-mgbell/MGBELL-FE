import { fontWeight } from '@/styles/constant';
import { style } from '@vanilla-extract/css';

export const layoutStyle = {
  contnet: style({
    display: 'flex',
    flexDirection: 'column',
  }),
  title: style({
    fontSize: 17,
    fontWeight: fontWeight.bold,
    marginLeft: 5,
    marginBottom: 10,
  }),
};

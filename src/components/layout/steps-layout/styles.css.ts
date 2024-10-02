import { fontWeight } from '@/styles/constant';
import { style } from '@vanilla-extract/css';

export const styles = {
  content: style({
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '4rem',
  }),
  title: style({
    fontSize: 17,
    fontWeight: fontWeight.bold,
    marginLeft: 5,
    marginBottom: 10,
  }),
};

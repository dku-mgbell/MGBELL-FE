import { borderRadius } from '@/styles/constant';
import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    padding: 18,
    backgroundColor: '#ECF7FF',
    borderRadius: borderRadius.md,
    display: 'flex',
    justifyContent: 'space-between',
    color: '#585858',
  }),
};

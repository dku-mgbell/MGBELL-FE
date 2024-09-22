import { globalStyle, style } from '@vanilla-extract/css';
import { colors } from './constant';

export const styles = {
  main: style({}),
  filterContainer: style({
    display: 'flex',
    justifyContent: 'space-between',
    color: colors.lightGray200,
  }),
  sortContainer: style({
    display: 'flex',
    gap: 5,
    fontSize: 14,
    alignItems: 'center',
  }),
  storeContainer: style({
    display: 'flex',
    flexDirection: 'column',
  }),
};

globalStyle(`${styles.filterContainer} *`, { fontSize: 14 });
globalStyle(`${styles.sortContainer} svg`, { marginLeft: 2 });

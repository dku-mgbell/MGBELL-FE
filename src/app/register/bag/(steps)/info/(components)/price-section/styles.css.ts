import { borderRadius, colors, fontWeight } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';

export const styles = {
  tabContainer: style({
    display: 'flex',
    width: '100%',
    margin: '20px 0',
  }),
  tabButton: style({
    display: 'flex',
    flex: 1,
    textAlign: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    color: '#C2C2C2',
    fontSize: 15,
  }),
  selectedBar: style({
    width: '100%',
    height: '1px',
    marginTop: 7,
    backgroundColor: '#E6E6E6',
  }),
  contentContainer: style({
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  }),
  message: style({
    fontSize: 15,
    color: colors.lightGray150,
    lineHeight: 1.3,
  }),
  priceButtonContainer: style({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  }),
  priceButton: style({
    width: '48%',
    cursor: 'pointer',
    padding: 10,
    boxSizing: 'border-box',
    border: '1.2px solid #D9D9D9',
    borderRadius: borderRadius.md,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  }),
  price: style({
    fontSize: 13,
    color: '#585858',
  }),
  priceDesc: style({
    fontSize: 10.5,
    fontWeight: fontWeight.light,
    color: '#AEAEAE',
    lineHeight: 1.4,
  }),
};

globalStyle(`${styles.tabButton}:has(input:checked) div`, {
  backgroundColor: colors.secondary,
  height: '5px',
  borderRadius: borderRadius.md,
  marginTop: 5,
});

globalStyle(`${styles.tabButton}:has(input:checked)`, {
  color: '#585858',
});

globalStyle(`${styles.message} span`, {
  color: '#818181',
  fontSize: 15,
});

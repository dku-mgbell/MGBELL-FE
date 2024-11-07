import { colors, fontWeight } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';

export const styles = {
  inputContainer: style({
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: 20,
    width: '100%',
    overflow: 'hidden',
  }),
  input: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: 15,
    width: '25%',
  }),
  inputThumbnail: style({
    width: '100%',
    height: '100%',
  }),
  inputName: style({
    color: colors.lightGray150,
    fontSize: 14,
    marginTop: 4,
  }),
};

globalStyle(`${styles.input}:has(input)>img`, {
  filter: 'grayscale(100%) brightness(1.1)',
});

globalStyle(`${styles.input}:has(input:checked)>img`, {
  filter: 'grayscale(0%)',
});

globalStyle(`${styles.input}:has(input:checked)>p`, {
  color: '#5D5D5D',
  fontWeight: fontWeight.bold,
});

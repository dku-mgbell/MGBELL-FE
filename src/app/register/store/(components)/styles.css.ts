import { colors, fontWeight } from '@/styles/constant';
import { globalStyle, style } from '@vanilla-extract/css';

export const styles = {
  inputContainer: style({
    display: 'flex',
    width: '100%',
    maxWidth: 400,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingTop: 20,
  }),
  input: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    width: '30%',
    marginBottom: 15,
  }),
  inputThumbnail: style({
    borderRadius: '100%',
    border: `2px solid #D9D9D9`,
  }),
  inputName: style({
    color: colors.lightGray150,
    fontSize: 14,
    marginTop: 4,
  }),
};

globalStyle(`${styles.input}:has(input:checked)>img`, {
  border: `2px solid ${colors.primary}`,
});

globalStyle(`${styles.input}:has(input:checked)>p`, {
  color: '#5D5D5D',
  fontWeight: fontWeight.bold,
});

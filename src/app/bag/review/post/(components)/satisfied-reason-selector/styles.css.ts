import { globalStyle, style } from '@vanilla-extract/css';
import { colors } from '@/styles/constant';

export const styles = {
  inputWrapper: style({
    display: 'flex',
    justifyContent: 'center',
    margin: '10px 0',
  }),
  inputContainer: style({
    display: 'flex',
    justifyContent: 'center',
    gap: 5,
    width: '300px',
    flexWrap: 'wrap',
    overflow: 'hidden',
  }),
  input: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
  }),
  inputName: style({
    border: 'solid 1.5px #d9d9d9',
    color: colors.lightGray150,
    fontSize: 14,
    marginTop: 4,
    padding: 14,
    borderRadius: 50,
    textWrap: 'nowrap',
  }),
};

globalStyle(`${styles.input}:has(input:checked)>p`, {
  color: '#5D5D5D',
  border: `solid 1.5px ${colors.primary}`,
  backgroundColor: '#FFF0D1',
});

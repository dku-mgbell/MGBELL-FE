import { style, globalStyle } from '@vanilla-extract/css';

export const bottomSheetContainer = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

globalStyle(`${bottomSheetContainer} .react-modal-sheet-container`, {
  maxWidth: '450px !important',
  width: '100% !important',
  margin: '0 auto !important',
  left: '0 !important',
  right: '0 !important',
});

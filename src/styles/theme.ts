'use client';

import { createTheme } from '@mui/material/styles';
import { colors } from './constant';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
});

export default theme;

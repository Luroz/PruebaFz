import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#eb0f37',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#14152c',
    },
    neutral: {
      main: '#4331e2',
      contrastText: '#fff',
    },
  },
});

export default theme
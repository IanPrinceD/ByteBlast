import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#FFF',
    },
    accent: {
      main: '#DB4444',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 'clamp(1.9rem, 3vw, 2.4rem)',
      fontWeight: '700',
      color: '#000',
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      fontWeight: '500',
      color: '#000',
    },
    body1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.6rem',
      fontWeight: '400',
    },
    subtitle1: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 'clamp(2.9rem,5vw,3.6rem)',
      fontWeight: '500',
      color: '#000',
      letterSpacing: '1.44px',
    },
    subtitle2: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 'clamp(2.5rem,5vw,3.2rem)',
      fontWeight: '500',
      color: '#000',
      letterSpacing: '1.28px',
    },
  },
});

export default theme;

import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './shared/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </ThemeProvider>
  );
}

export default App;

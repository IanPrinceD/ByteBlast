import { ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import theme from './shared/Theme';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <Header />
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </ThemeProvider>
  );
}

export default App;

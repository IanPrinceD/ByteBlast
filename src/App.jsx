import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Index";

function App() {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

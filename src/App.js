import About from "./Pages/About";
import Detail from "./Pages/Detail";
import Home from "./Pages/Home";

import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <PrimeReactProvider value={{ unstyled: false }}>
      <AppRouter />
    </PrimeReactProvider>
  );
}

export default App;

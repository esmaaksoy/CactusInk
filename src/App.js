import { ToastContainer } from "react-toastify";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import AppRouter from "./router/AppRouter";
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import store, { persistor } from "./app/store"
function App() {
  return (
    <PrimeReactProvider value={{ unstyled: false }}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </PrimeReactProvider>
  );
}

export default App;

import About from "./Pages/About"
import Detail from "./Pages/Detail"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import LoginForm from "./components/auth/LoginForm"
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
        
function App() {
  
  return (
    <PrimeReactProvider value={{ unstyled: false}}>
      
    <div >
     {/* <Login/> */}
     {/* <LoginForm/> */}
     {/* <About/> */}
   <Navbar/>
   {/* <Home/> */}
   <Detail/>
   <Footer/>
   {/* <Card/> */}
    </div>
    </PrimeReactProvider>
  )
}

export default App

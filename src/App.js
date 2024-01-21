import About from "./Pages/About"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import LoginForm from "./components/auth/LoginForm"

function App() {
  return (
    <div>
     {/* <Login/> */}
     {/* <LoginForm/> */}
     {/* <About/> */}
 
   <Navbar/>
   <Home/>
     <Footer/>
   {/* <Card/> */}
    </div>
  )
}

export default App

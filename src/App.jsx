import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import Footer from "./components/Footer/Footer"
import "./App.css"
import { Route, Routes } from "react-router"
import ProductsS from "./components/SellProducts/ProductsS"
import Mycart from "./components/Mycart/Mycart"
import Login from "./components/Login-Register/Login"
import Register from "./components/Login-Register/Register"
import { FaArrowAltCircleUp } from "react-icons/fa"
const App = () => {
  const [dispaly,setdisplay]=useState(false);
  const [check,setcheck]=useState(false)
  useEffect(()=>{
    Aos.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    }); 
    window.addEventListener('scroll',handleScroll)
  },[])

  const handleScroll=()=>{
    if(window.scrollY > 500 ){
      setdisplay(true)
    }
    else{
      setdisplay(false)
    }
  }
  const scrollToTop=()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative">
      {check === true && <Navbar />}
      <FaArrowAltCircleUp onClick={()=>scrollToTop()} className={`fixed bottom-5 right-1 w-20 z-50 text-3xl text-primary hover:-translate-y-3 duration-300 ${dispaly===true?"sm:block hidden":"hidden"}`} />
      <Routes>
        <Route path="e-commerce/login" element={<Login setcheck={setcheck}/>}></Route>
        <Route path="e-commerce/register" element={<Register setcheck={setcheck}/>}></Route>
        <Route path="/e-commerce" element={<Hero setcheck={setcheck}/>}></Route>
        <Route path="e-commerce/Products" element={<ProductsS setcheck={setcheck}/>}></Route>
        <Route path="e-commerce/mycart" element={<Mycart setcheckk={setcheck}/>}></Route>
      </Routes>
      {check && <Footer />}
    </div>
  )
}

export default App

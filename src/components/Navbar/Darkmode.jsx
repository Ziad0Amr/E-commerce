import lightbutton from "../../assets/website/light-mode-button.png"
import darkbutton from "../../assets/website/dark-mode-button.png"
import { useEffect, useState } from "react"

const Darkmode = () => {
    const [theme,settheme]=useState("light")
    const element=document.documentElement;
    useEffect(()=>{
        if(theme === "dark"){
            element.classList.add("dark");
            settheme("dark");
        }
        else{
            element.classList.remove("dark");
            settheme("light");
        }
    },[theme])
    return (
        <div className="relative"> 
            <img src={lightbutton} alt=""
            onClick={()=>settheme(theme==="light"?"dark":"light")}
            className={`w-12 cursor-pointer transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}` }
            />
            <img src={darkbutton} alt=""

            className="w-12 cursor-pointer transition-all duration-300"
            />
        </div>
    )
}

export default Darkmode
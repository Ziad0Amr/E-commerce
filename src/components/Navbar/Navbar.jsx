import { IoMdSearch } from "react-icons/io"
import logo from "../../assets/logo.png"
import { FaCaretDown, FaCartShopping } from "react-icons/fa6"
import Darkmode from "./Darkmode"
import { DropdownLinks } from "../../data/DropdownLinks";
import { Menu } from "../../data/Menu";
import { useEffect, useState } from "react";
import Orders from "../Orders/Orders";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetUser, UbdateUser } from "../../reduxTLK/User";


const Navbar = () => {
    const [show,setshow]=useState(false)
    const {user} = useSelector((state)=>state.User);
    const dispatch=useDispatch()
    const navtoLogin=useNavigate()
    useEffect(()=>{
        dispatch(GetUser())
    },[])
    const ubdateIsLogged=()=>{
        if(Object.values(user).length > 0){
            const finduser=user.filter((item)=>item.islogged === true)
            dispatch(UbdateUser({id:finduser[0].id,islogged:false}))
        } 
    }

    const islogin=()=>{
        if(user.every((item)=>item.islogged !== true)){
            navtoLogin("e-commerce/login")
        }
    }

    return (
        <div className="fixed w-full z-50 top-0">
            <Orders show={show} setshow={setshow}/>
            <div id="home" className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            {/* upper navbar */}
            <div className="bg-primary/40 py-2 ">
                <div className="container flex justify-between items-center">
                    <div>
                        <Link to="/e-commerce"
                        className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src={logo} alt="logo"
                            className="w-10"/>
                            Shopsy
                        </Link>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                        <div className="relative group hidden sm:block">
                            <input type="text" placeholder="Search"
                            className="w-[200px] sm:w-[200px]
                            group-hover:w-[300px] transition-all 
                            duration-300 rounded-full border
                            border-gray-300 px-2 py-1
                            focus:outline-none focus:border-1 
                            focus:border-primary
                            dark:bg-gray-800 dark:border-gray-500"
                            />
                            <IoMdSearch
                            className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"/>
                        </div>
                        <button
                            onClick={()=>(setshow(true),islogin())}
                            className="bg-gradient-to-t from-primary to-secoudary transition-all duration-200 
                            text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                            <span className="group-hover:block hidden transition-all duration-200">Order</span>
                            <FaCartShopping className="text-xl text-white cursor-pointer drop-shadow-sm"/>
                        </button>
                        <div>
                            <Darkmode />
                        </div>
                            {   Object.values(user).length > 0 ?
                                (
                                    user[0].islogged === false ? <Link to="e-commerce/login" className=" w-[80px] h-[30px] bg-primary text-center rounded-full text-white dark:text-black font-semibold pt-[1px] hover:shadow-xl hover:bg-primary/80">Login</Link>
                                    :<Link to="e-commerce/login" onClick={()=>ubdateIsLogged()} className=" w-[80px] h-[30px] bg-primary text-center rounded-full text-white dark:text-black font-semibold pt-[1px] hover:shadow-xl hover:bg-primary/80">Logout</Link>
                                ):<Link to="e-commerce/login" className=" w-[80px] h-[30px] bg-primary text-center rounded-full text-white dark:text-black font-semibold pt-[1px] hover:shadow-xl hover:bg-primary/80">Login</Link>
                                
                            }
                    </div>
                </div>
            </div>
            {/* lower navbar */}
            <div className="flex justify-center">
                <ul className="sm:flex hidden items-center gap-4">
                    {
                    Menu.map((item,index)=>(
                        <li key={index}>
                            {
                                item.name === "Products"
                                ?<Link className="px-4 hover:text-primary duration-200 inline-block" to="/e-commerce/Products">{item.name}</Link>
                                :item.name === "Home" ? <Link className="px-4 hover:text-primary duration-200 inline-block" to="/e-commerce">{item.name}</Link>
                                :<a href={item.link}
                                className="px-4 hover:text-primary duration-200 inline-block"
                                >{item.name}</a>
                            }
                        </li>
                    ))}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex gap-[2px] py-4 items-center group">
                        Trending Products
                        <span>
                            <FaCaretDown 
                            className="transition-all duration-200 group-hover:rotate-180"
                            />
                        </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white text-black shadow-md">
                            <ul className="">
                                {
                                    DropdownLinks.map((item,index)=>(
                                        <li key={index}>
                                            <a href={item.link}
                                            className="rounded-md w-full inline-block p-2 hover:bg-primary/20 mt-1"
                                            >{item.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        
    )
}

export default Navbar
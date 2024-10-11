import { FcGoogle } from "react-icons/fc"
import logo from "../../assets/logo.png"
import image1 from "../../assets/women/women-Photoroom.png"
import { Link, useNavigate } from "react-router-dom"
import Darkmode from "../Navbar/Darkmode"
import { useEffect, useState } from "react"
import {  useDispatch, useSelector } from "react-redux"
import { GetUser, UbdateUser } from "../../reduxTLK/User"


const Login = ({setcheck}) => {
    const {user} = useSelector((state)=>state.User);
    const [useremail,setuseremail]=useState("")
    const [userepass,setuserepass]=useState("")
    const dispatch=useDispatch()
    const navToHome=useNavigate()

    const ubdateIsLogged=()=>{
        const finduser=user.filter((item)=>item.email === useremail && item.pass === userepass)
        dispatch(UbdateUser({id:finduser[0].id,islogged:true}))
    }

    useEffect(()=>{
        setcheck(false)
        dispatch(GetUser())
    },[])
    const submitUser=(e)=>{
        e.preventDefault();
        Object.values(user).length > 0 && user.some((item)=>item.email === useremail && item.pass === userepass) 
        ? (ubdateIsLogged(), setTimeout(() => {
            navToHome('/e-commerce')
        }, 1000))
        :alert("Invalid Email or Password")
    }

    return (
        <div className="w-full h-full bg-gray-50 dark:bg-gray-900 pt-[100px] pb-[43px]" >
            <div className="fixed w-full z-50 top-0">
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
                                <div>
                                    <Darkmode />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:w-[80%] w-[90%] md:w-[60%] lg:w-[80%] h-[80%] mx-auto p-4 md flex-col flex lg:flex-row gap-[30px]">
                <div className="ml-[50px] lg:w-[40%] w-[80%] order-2 lg:order-1">
                    <div className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
                        <img className="w-5 h-5" src={logo} alt="logo_image"/>
                        <p className="text-[20px]">Shopsy</p>
                    </div>
                    <h1 className="font-semibold text-2xl mt-[20px] lg:mt-[70px]">Welcome Back</h1>
                    <p className="text-[15px] text-gray-400 mb-[40px]">Allows you to pay online at all applications and website that accepts MasterCard cards</p>
                    <form onSubmit={submitUser}>
                        <div className="flex flex-col mb-3 space-y-[5px]">
                            <label className="font-semibold">Email</label>
                            <input onChange={(e)=>setuseremail(e.target.value)} className="border-gray-400 border-[1px] h-[40px] px-3 rounded-xl" type="text" placeholder="Enter Your Email..."/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold">Password</label>
                            <input onChange={(e)=>setuserepass(e.target.value)} className="border-gray-400 border-[1px] h-[40px] px-3 rounded-xl" type="password" placeholder="Enter Your Email..."/>
                        </div>
                        <div className="flex justify-between items-center mt-[20px]">
                            <div className="flex items-center gap-1">
                                <input className=" w-4 h-4 border border-gray-400 rounded-sm checked:bg-yellow-500 checked:border-transparent" type="checkbox" />
                                <label>Remember Me</label>
                            </div>
                            <a href="#" className="text-primary">Forgot Password?</a>
                        </div>
                        <button className="w-[100%] h-[40px] bg-primary mt-4 rounded-xl text-white text-lg">Sign In</button>
                        <button className="w-[100%] h-[40px] border border-gray-500 mt-4 rounded-xl text-gray-400 flex items-center justify-center gap-2"><FcGoogle className="text-xl"/>Sign in with Google</button>
                        <div className="flex justify-center mt-[10px] gap-2">
                            <p className="text-sm text-gray-400">Not registered yet? </p>
                            <Link to="/e-commerce/register" className="text-primary text-sm">Create an Account</Link>
                        </div>
                    </form>
                </div>
                <div className="lg:w-[60%] w-[100%] rounded-lg order-1 lg:order-2">
                    <img className="bg-cover w-[100%] h-[100%] rounded-lg" src={image1} alt="login-image"/>
                </div>
            </div>
        </div>
    )
}

export default Login

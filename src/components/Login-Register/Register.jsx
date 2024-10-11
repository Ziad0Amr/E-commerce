import { FcGoogle } from "react-icons/fc"
import logo from "../../assets/logo.png"
import image1 from "../../assets/women/women2.jpg"
import { Link, useNavigate } from "react-router-dom"
import Darkmode from "../Navbar/Darkmode"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddUser } from "../../reduxTLK/User"

const Register = ({setcheck}) => {
    const {user}=useSelector((state)=>state.User)
    const navToLogin=useNavigate("/login")
    const dispatch=useDispatch()
    const [Fname,setFname]=useState("")
    const [Lname,setLname]=useState("")
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    let count=0;
    useEffect(()=>{
        setcheck(false)
        count = user.length;
        if(user.length===undefined){
            count=0
        }
        console.log(count)
    },[])

    const handlesubmit=(e)=>{
        e.preventDefault();
        const Userobj={
            Fname,
            Lname,
            email,
            pass,
            id:(count+1).toString()
        }
        dispatch(AddUser(Userobj))
        setFname("")
        setLname("")
        setemail("")
        setpass("")
        setTimeout(()=>{
            navToLogin("/e-commerce/login")
        },1000)
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
                    <h1 className="font-semibold text-2xl mt-[20px] lg:mt-[50px]">Welcome</h1>
                    <p className="text-[15px] text-gray-400 mb-[40px]">Allows you to pay online at all applications and website that accepts MasterCard cards</p>
                    <form onSubmit={handlesubmit}>
                        <div className="flex flex-col lg:flex-row gap-2">
                            <div className="flex flex-col mb-3 space-y-[5px] min-w-[50px]">
                                <label className="font-semibold">First Name</label>
                                <input onChange={(e)=>setFname(e.target.value)} value={Fname}  className="border-gray-400 border-[1px] h-[40px] px-3 rounded-xl" type="text" placeholder="Enter Your First Name..."/>
                            </div>
                            <div className="flex flex-col mb-3 space-y-[5px] min-w-[50px] ">
                                <label className="font-semibold">Last Name</label>
                                <input onChange={(e)=>setLname(e.target.value)}  value={Lname}   className="border-gray-400 border-[1px] h-[40px] px-3 rounded-xl" type="text" placeholder="Enter Your Last Name..."/>
                            </div>
                        </div>
                        <div className="flex flex-col mb-3 space-y-[5px]">
                            <label className="font-semibold">Email</label>
                            <input onChange={(e)=>setemail(e.target.value)} value={email}  className="border-gray-400 border-[1px] h-[40px] px-3 rounded-xl" type="text" placeholder="Enter Your Email..."/>
                        </div>
                        <div className="flex flex-col">
                            <label className="font-semibold">Password</label>
                            <input onChange={(e)=>setpass(e.target.value)} value={pass}  className="border-gray-400 border-[1px] h-[40px] px-3 rounded-xl" type="password" placeholder="Enter Your password..."/>
                        </div>
                        <button className="w-[100%] h-[40px] bg-primary mt-4 rounded-xl text-white text-lg">Sign Up</button>
                        <button className="w-[100%] h-[40px] border border-gray-500 mt-4 rounded-xl text-gray-400 flex items-center justify-center gap-2"><FcGoogle className="text-xl"/>Sign up with Google</button>
                        <div className="flex justify-center mt-[10px] gap-2">
                            <p className="text-sm text-gray-400">Have already an account? </p>
                            <Link to="/e-commerce/login" className="text-primary text-sm">Login here</Link>
                        </div>
                    </form>
                </div>
                <div className="lg:w-[60%] w-[100%] rounded-lg order-1 lg:order-2 ">
                    <img className="bg-cover w-[100%] h-[100%] rounded-lg" src={image1} alt="login-image"/>
                </div>
            </div>
        </div>
    )
}

export default Register

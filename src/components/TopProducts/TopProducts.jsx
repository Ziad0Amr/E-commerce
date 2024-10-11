import { FaStar } from "react-icons/fa6"
import { TopProductsData } from "../../data/TopProductsData"
import { useDispatch, useSelector } from "react-redux"
import { AddProduct } from "../../reduxTLK/Product"
import { useNavigate } from "react-router"
// import { FaStar } from "react-icons/fa6"
const TopProducts = () => {
    let {user} = useSelector((state)=>state.User)
    const navtoLogin=useNavigate()
    const dispatch=useDispatch()
    const islogin=()=>{
        if(user.every((item)=>item.islogged !== true)){
            navtoLogin("/e-commerce/login")
        }else{
            return false;
        }
    }
    return (
        <div id="top-rated">
            <div className="container">
                <div className="text-left mb-28">
                    <p data-aos="fade-up" className="text-sm text-primary">Top Rated Products for you.</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">lorem ispum dolor sit amet consectetur, adipiscing elit. sit asperiores modi</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {
                        TopProductsData.map((item,index)=>(
                            <div key={index}
                            data-aos="zoom-in"
                            className=" rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]:"
                            >
                                <div className="h-[100px]">
                                    <img className="max-w-[140px] block mx-auto transform -translate-y-24 group-hover:scale-105 duration-300 drop-shadow-md" src={item.img} alt={item.title}/>
                                </div>
                                <div className="w-full flex items-center justify-center gap-1">
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                </div>
                                <h1 className="text-xl font-bold">{item.title}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{item.description}</p>
                                <button  onClick={()=>{islogin() === false && dispatch(AddProduct(item))}} className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mb-3 mt-4 group-hover:bg-white group-hover:text-primary">Order Now</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TopProducts
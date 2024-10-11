import { Categories } from "../../data/Categories"
import { FaCartPlus } from "react-icons/fa6"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { AddProduct, DeleteProduct, GetnewProducts, GetProduct, UbdateCount } from "../../reduxTLK/Product"
import { BsFillCartDashFill } from "react-icons/bs"
import { useNavigate } from "react-router"

const ProductsS = ({setcheck}) => {
    let {product,newProduct} =useSelector((state)=>state.products)
    let {user} = useSelector((state)=>state.User)
    // set category in this state to searsh py name 
    const [cat,setcat]=useState("")
    const navtoLogin=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetProduct())
        dispatch(GetnewProducts())
        setcheck(true);
    },[])
    const Addcount=(id)=>{
        const prod=product.find((item)=>item.id===id)
        dispatch(UbdateCount({id,count:prod.count + 1}))
    }
    const mincount=(id)=>{
        const prod=product.find((item)=>item.id===id)
        dispatch(UbdateCount({id,count:prod.count - 1}))
    }
    const islogin=()=>{
        if(user.every((item)=>item.islogged !== true)){
            navtoLogin("/e-commerce/login")
        }else{
            return false;
        }
    }
    return (
        <div className="pt-[100px]">
            <div className="container">
                <h1 className="my-7 text-center font-bold text-3xl">Featured Products</h1>
                <div>
                    <ul className="flex items-center gap-11 justify-center">
                        {
                            Categories.map((item,index)=>(
                                <li className="cursor-pointer hover:text-primary duration-300 hover:scale-105" key={index} onClick={()=>{item === "All" ?setcat(""):setcat(item)}}>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 my-11 ">
                    {
                        Object.values(product).length > 0 &&(
                            (cat !== ""?
                                product.filter((item)=>item.category===cat)
                                :product
                            )
                            .map((item)=>(
                                <div data-aos="fade-up" key={item.id} className=" bg-gray-100 dark:bg-gray-700 shadow-lg p-3 rounded-lg overflow-hidden">
                                    <div className="w-full h-[250px] dark:bg-gray-500 bg-white rounded-lg mb-3">
                                        <img className="w-full h-[250px] object-cover" src={`e-commerce/${item.img}`} alt={item.title}/>
                                    </div>
                                    <div className="flex items-center gap-9 relative">
                                        <div>
                                            <h2 className="font-semibold text-lg">{item.title}</h2>
                                            <p className="text-gray-500 capitalize">{item.category}</p>
                                            <span className="font-semibold">${item.price}</span>
                                        </div>
                                        <div className=" h-[35px] rounded-full bg-gray-800 flex items-center p-3 absolute right-0 gap-4 text-gray-200">
                                            
                                                {
                                                    item.count >= 1 ? <BsFillCartDashFill className="cursor-pointer text-red-500" onClick={()=>{
                                                        if(Object.values(newProduct).length > 0){
                                                            dispatch(DeleteProduct(item.id))
                                                        }
                                                        mincount(item.id)}}/> 
                                                    :<FaCartPlus  className="cursor-pointer text-green-400" onClick={()=>
                                                        {
                                                        islogin()===false && (dispatch(AddProduct(item)),Addcount(item.id))
                                                        }
                                                    }/>
                                                }
                                        </div>
                                    </div>
                                </div>
                            )))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsS
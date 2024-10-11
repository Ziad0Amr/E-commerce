import { RxCross2 } from "react-icons/rx"
import imagecart from "../../assets/website/emptycart.png"
import { FaMinus, FaPlus } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { DeleteProduct, GetnewProducts, UbdateCount, UbdateNewCount } from "../../reduxTLK/Product"
import { Link } from "react-router-dom"
const Orders = ({show,setshow}) => {
    let {newProduct} = useSelector((state)=>state.products)
    const {user} = useSelector((state)=>state.User);
    const dispatsh=useDispatch();
    useEffect(()=>{
        dispatsh(GetnewProducts())
        if(Object.values(user).length>0){
            if(user[0].islogged === false){
                if(Object.values(newProduct).length > 0){
                    newProduct.map((item)=>{
                        dispatsh(UbdateCount({id:item.id,count:0}))
                        dispatsh(DeleteProduct(item.id))
                    })
                }
            }
        }
    },[])
    const Addcount=(id)=>{
        const newproduct=newProduct.find((item)=>item.id==id)
        dispatsh(UbdateNewCount({id,count:newproduct.count + 1}))
    }
    const Mincount=(id)=>{
        if(Object.values(newProduct).length>0){
            const newproduct=newProduct.find((item)=>item.id==id)
            if(newproduct.count <= 1){
                dispatsh(DeleteProduct(id))
                dispatsh(UbdateCount({id,count:0}))
            }else{
                dispatsh(UbdateNewCount({id,count:newproduct.count - 1}))
            }   
        }
    }
    return (
        <div className={`${show===false?"hidden":"visible"} overflow-hidden h-[100vh] w-full bg-black/20 absolute z-50 dark:text-black`}>
            <div className="h-full w-96 bg-white absolute z-50 right-0 shadow-2xl rounded-l-lg dark:bg-gray-900">
                <RxCross2 onClick={()=>setshow(false)} className="text-2xl cursor-pointer right-5 absolute top-5 dark:text-white"/>
                    <h1 className="text-center text-2xl mt-[15px] text-black font-bold dark:text-white">My Cart</h1>
                    {
                        Object.values(newProduct).length <= 0
                        ?<div className="mt-36">
                            <img src={imagecart} alt="cartEmpty"/>
                        </div>
                        :<div className="pt-14 px-5 flex flex-col gap-3 ">
                            {
                                newProduct.map((item,index)=>(
                                    <div key={index} className="flex items-center gap-10 w-full h-[70px] bg-gray-800 rounded-lg dark:bg-white">
                                        <div className="w-[65px] h-[65px] ">
                                            <img className="object-cover h-full w-full ml-1 rounded-md" src={item.img} alt={item.title}/>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <h2 className="font-semibold text-white dark:text-black w-[120px]">{item.title}</h2>
                                            <div className="flex items-center max-w-[90px] h-[30px] mr-2 bg-gray-200 gap-4 pl-2.5 rounded-full">
                                                <FaMinus className="cursor-pointer" onClick={()=>Mincount(item.id)}/>
                                                <span>{item.count}</span>
                                                <FaPlus className="cursor-pointer mr-1" onClick={()=>Addcount(item.id)}/>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                    }
                    <Link to="./e-commerce/mycart" className="w-[120px] h-[30px] bg-black block  text-white text-center absolute bottom-5 left-[35%] rounded-lg hover:scale-105 duration-300" onClick={()=>setshow(false)}>Show Cart</Link>
            </div>
        </div>
    )
}

export default Orders
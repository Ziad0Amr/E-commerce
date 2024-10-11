import { FaArrowRight, FaCartShopping, FaCircleCheck, FaMinus, FaPlus, FaRegCircleCheck } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { DeleteProduct, GetnewProducts, UbdateCount, UbdateNewCount } from '../../reduxTLK/Product'
import { RxCross2 } from 'react-icons/rx'
const Mycart = ({setcheckk}) => {
    const {newProduct} = useSelector((state)=>state.products)
    const [code,setcode]=useState(false)
    const [check,setcheck]=useState(false)
    const dispatch=useDispatch()
    useEffect(()=>{
        setcheckk(true)
        chcekRight()
        setTimeout(() => {
            dispatch(GetnewProducts())
        }, 1000);
    },[check])
    const Addcount=(id)=>{
        const newproduct=newProduct.find((item)=>item.id==id)
        dispatch(UbdateNewCount({id,count:newproduct.count + 1}))
    }
    const mincount=(id)=>{
        const newproduct=newProduct.find((item)=>item.id==id)
        if(newproduct.count <= 1){
            dispatch(DeleteProduct(id))
            dispatch(UbdateCount({id,count:0}))
        }else{
            dispatch(UbdateNewCount({id,count:newproduct.count - 1}))
        }   
    }
    const total=(id)=>{
        const pro=newProduct.find((item)=>item.id===id)
        return (pro.count)*(pro.price)
    }
    const totalAllPro=()=>{
        let total = 0;
        if(Object.values(newProduct).length>0){
            for(let item of newProduct){
                total =total + item.count*item.price;
            }
            return total;
        }
    }
    const chcekRight=()=>{
        check===true&&
        Object.values(newProduct).length > 0 &&
        newProduct.map((item)=>{
            dispatch(UbdateCount({id:item.id,count:0}))
            dispatch(DeleteProduct(item.id))
        })
    }
    return (
        <div className='pt-[150px] container relative'> 
            <div className='flex items-center gap-3 justify-center mb-10'>
                <FaCartShopping className="text-3xl text-primary"/>
                <h1 className='text-3xl font-bold mt-[-5px]'>Your Cart</h1>
            </div>
            <div className='flex justify-between md:flex-row flex-col'>
                <div className="md:w-[60%] w-[100%]">
                    <div className="grid grid-cols-11">
                        <p className='col-span-4'>Product</p>
                        <p className='col-span-2 text-center'>Price</p>
                        <p className='col-span-2 text-center'>Quantity</p>
                        <p className='col-span-2 text-center'>Total</p>
                        <p className='col-span-1 text-center'></p>
                    </div>
                    <hr className="w-[100%] h-[2px] bg-gray-400 my-4"/>
                    {
                        Object.values(newProduct).length > 0 &&
                        newProduct.map((item,index)=>(
                            <div data-aos="fade-up" data-aos-delay={index*100} key={item.id}>
                                <div  className='grid grid-cols-11'>
                                    <div className='flex items-center min-w-[147px] md:mr-[25px] col-span-4'>
                                        <div className='w-[60px] h-[100px] bg-gray-300 mr-3 rounded-2xl'>
                                            <img className='w-[50px] h-[50px] mx-auto mt-6' src={item.img}/>
                                        </div>
                                        
                                        <h1>{item.title}</h1>
                                    </div>
                                    <div className=' col-span-2 text-center'>${item.price}</div>
                                    <div className='flex items-center mx-auto max-w-[90px] h-[30px]  col-span-2 bg-gray-200 gap-4 pl-2.5 rounded-full dark:bg-gray-700'>
                                        <FaMinus className="cursor-pointer" onClick={()=>mincount(item.id)}/>
                                        <span>{item.count}</span>
                                        <FaPlus className="cursor-pointer mr-1" onClick={()=>Addcount(item.id)}/>
                                    </div>
                                    <div className='col-span-2 text-center'>{total(item.id)}</div>
                                    <div className='w-[25px] h-[25px] dark:bg-gray-800 bg-gray-300 rounded-full pl-[3px] pb-[2px]'><RxCross2   className='text-red-600 text-xl cursor-pointer col-span-1 mt-[3.5px] hover:scale-105 duration-300 hover:text-red-800' onClick={()=>{dispatch(DeleteProduct(item.id)),dispatch(UbdateCount({id:item.id,count:0}))}}/></div>
                                </div>  
                                <hr className="w-[100%] h-[2px] bg-gray-400 my-4"/>
                            </div>
                        ))
                    }
                </div>
                <div data-aos="zoom-in" className='grid grid-cols-1 min-w-[25%] mr-0 lg:mr-[50px] h-[300px]'>
                    <div className='py-3 px-5 dark:bg-gray-500 bg-gray-100 rounded-md mb-2 shadow-md dark:border-gray-600 border-gray-200 border-[1px]'>
                        <h2 className='mb-3 font-semibold'>Order Summary</h2>
                        <hr className='dark:border-gray-600 border-gray-300'/>
                        <div className='py-6'>
                            <div className='flex justify-between items-center'>
                                <p>Subtotal</p>
                                <span>
                                    {
                                        Object.values(newProduct).length<=0 ? 0
                                        :`$${totalAllPro()}`
                                    }
                                </span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p>Shipping</p>
                                <span>
                                    {
                                        Object.values(newProduct).length<=0 ? 0
                                        :code===false ? `$${(2*totalAllPro()/100)}`
                                        :<p className='text-primary'>Free</p>
                                    }
                                </span>
                            </div>
                            <button className={code===false?'flex items-center gap-1 group':'flex items-center gap-1 group text-green-500 duration-300'} onClick={()=>setcode(!code)}>Add coupon code 
                                {
                                    code===false? <FaArrowRight className='mt-[2px] group-hover:translate-x-2 duration-200'/>
                                    :<FaRegCircleCheck className='mt-[2px] text-green-500'/>
                                }
                            </button>
                        </div>
                        <hr className='dark:border-gray-600 border-gray-300'/>
                        <div className='pt-3 flex justify-between'>
                            <p className='text-lgfont-semibold'>Total</p>
                            <span className='font-semibold'>{Object.values(newProduct).length<=0 ? 0:code===false ? `$${totalAllPro()+(2*totalAllPro()/100)}`:`$${totalAllPro()}`}</span>
                        </div>
                    </div>
                    <button onClick={()=>{setcheck(!check)}} 
                        className={`uppercase text-white group w-[100%] h-[50px] rounded-md mb-5 hover:shadow-lg  duration-300 ${check===false?" bg-primary":"bg-green-600 "}`}>
                        {check===false?"Checkout":<div className='flex justify-center items-center gap-2'><p>thanks</p><FaCircleCheck className='text-3xl'/></div>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mycart
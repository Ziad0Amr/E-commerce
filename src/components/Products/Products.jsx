import {FaStar} from "react-icons/fa6"
import { ProductsData } from "../../data/ProductsData"
import { Link} from "react-router-dom"
const Products = () => {
    return (
    <div id="product" className="mt-14 mb-12 ">
        <div className="container">
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you.</p>
                <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                <p data-aos="fade-up" className="text-xs text-gray-400">lorem ispum dolor sit amet consectetur, adipiscing elit. sit asperiores modi</p>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                    {
                        ProductsData.map((item,index)=>(
                            <div
                            data-aos="fade-up"
                            data-aos-delay={item.aosDelay}
                            key={index} className="space-y-3">
                                <img src={item.img} alt={item.id} className="h-[220px] w-[150px] object-cover rounded-md"/>
                                <div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.color}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400"/>
                                        <span>{item.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))  
                    }
                </div>
                <div data-aos="zoom-in" className="flex justify-center">
                    <button className="cursor-pointer py-1 px-5 bg-primary mt-10 rounded-md text-white hover:scale-105"><Link to="/e-commerce/Products">View All Products</Link></button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Products
import Slider from "react-slick";
import { ImageList } from "../../data/ImageList";
import Products from "../Products/Products";
import TopProducts from "../TopProducts/TopProducts";
import Banner from "../Banner/Banner";
import Subscripe from "../Subscripe/Subscripe";
import Testimonial from "../Testimonial/Testimonial";
import { useEffect } from "react";
const Hero = ({setcheck}) => {
    var setting={
        dots:false,
        arrows:false,
        infinity: true,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoplayspeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
    }
    useEffect(()=>{
        setcheck(true)
    },[])
    return (
        <div className="pt-[100px]">
            <div className="relative overflow-hidden mid:min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 "> 
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
            <div className="container pb-8 sm:pb-0">
                <Slider {...setting}>
                    {ImageList.map((item,index)=>(
                        <div key={index}>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                    <h1
                                    data-aos="zoom-out"
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold">{item.title}</h1>
                                    <p 
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    className="text-sm"
                                    >{item.description}</p>
                                    <div
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    >
                                        
                                        <button
                                        className="bg-gradient-to-r from-primary to-secoudary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                                        >Order Now</button>
                                    </div>
                                </div>
                                <div className="order-1 sm:order-2">
                                    <div
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    className="relative z-10">
                                        <img  src={item.img} alt={item.id} 
                                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </Slider>
            </div>
        </div>
        <Products/>
        <TopProducts/>
        <Banner/>
        <Subscripe />
        <Products/>
        <Testimonial/>
        </div>
        
    )
}

export default Hero
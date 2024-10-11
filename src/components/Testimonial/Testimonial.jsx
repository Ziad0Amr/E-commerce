import Slider from "react-slick"
import { TestimonialData } from "../../data/TestimonialData "

const Testimonial = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
            breakpoint: 10000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                },
            },
            ],
        };
    return (
        <div id="Testimonial" className="py-10 mb-10">
            <div className="container">
                <div className="text-center mb-10">
                    <p data-aos="fade-up" className="text-sm text-primary">What our customers are saying.</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">lorem ispum dolor sit amet consectetur, adipiscing elit. sit asperiores modi</p>
                </div>
                <div 
                data-aos="zoom-in">
                    <Slider {...settings}>
                        {
                            TestimonialData.map((item,index)=>(
                                <div key={index} className="my-6">
                                    <div
                                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                    >
                                        <div className="mb-4">
                                            <img src={item.img} alt={item.name} className="rounded-full h-20 w-20"/>
                                        </div>
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="space-y-3">
                                                <p className="text-xs text-gray-500">{item.text}</p>
                                                <h1 className="text-xl font-bold text-black/80 dark:text-primary">{item.name}</h1>
                                            </div>
                                        </div>
                                        <p className="absolute top-0 right-0 text-9xl text-black/20 font-serif">،،</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
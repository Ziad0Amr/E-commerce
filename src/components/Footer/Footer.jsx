import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6"
import footerlogo from "../../assets/logo.png"
import banner from "../../assets/website/footer-pattern.jpg"
import { FooterLinks } from "../../data/FooterLinks"
import { FaMobileAlt } from "react-icons/fa"


const bannerimage={
    backgroundImage:`url(${banner})`,
    backgroundPosition:"bottom",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    width:"100%",
    height:"100%"
}

const Footer = () => {
    return (
        <div style={bannerimage} className="text-white relative">
            <div className="bg-black/25 w-full h-full absolute top-0 left-0"></div>
            <div className="container">
                <div
                data-aos="zoom-in"
                className="grid md:grid-cols-3 pb-44 pt-5">
                    <div className="py-8 px-4">
                        <h1
                        className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3"
                        >
                            <img src={footerlogo} alt="footer-logo" className="max-w-[50px]"/>
                            Shopsy</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.</p>
                    </div>
                    <div className="grid grid-cols-2 col-span-2 md:pl-10">
                        <div>
                            <div className="py-8 px-4">
                                <h1
                                className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3"
                                >Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((item,index)=>(
                                            <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-200 text-gray-200" key={index}>
                                                <a href={item.link}>{item.title}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-3 items-center mt-9">
                                <a href="#"><FaInstagram className="text-3xl"/></a>
                                <a href="#"><FaFacebook className="text-3xl"/></a>
                                <a href="#"><FaLinkedin className="text-3xl"/></a>
                            </div>
                            <div className="mt-6 space-y-3">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow/>
                                    <p>Noida, Uttar Pradesh</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaMobileAlt/>
                                    <p>+20 123456789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
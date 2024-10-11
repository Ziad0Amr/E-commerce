import banner from "../../assets/website/orange-pattern.jpg"

const BannerImage={
    backgroundImage:`url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    hight: "100%",
    width: "100%",
} 
const Subscripe = () => {
    return (
        <div 
        data-aos="zoom-in"
        className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
        style={BannerImage}
        >
            <div className="container backdrop-blur-sm py-10">
                <div className="space-y-6 max-w-xl mx-auto">
                    <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">Get Notified About New Products</h1>
                    <input
                    data-aos="fade-up"
                    data-aos-delay="100"
                    type="text"
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default Subscripe
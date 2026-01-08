import Link from 'next/link';
import { LeftShapeSVG, RightShapeSVG } from '../SVG/BannerShapes';
const OtherHotelsSection = () => {
    const hotels = [
        {
            id: 1,
            name: "Elegance Inn Varanasi",
            url: "https://www.eleganceinnvns.com/",
            image: "/assets/dev-img/other-hotel/de.png",
            alt: "Elegance Inn Varanasi Logo",
        },
        {
            id: 2,
            name: "The Elegance Hotel",
            url: "https://www.devtheelegance.com/",
            image: "/assets/dev-img/other-hotel/eleganceinnvns.png",
            alt: "The Elegance Hotel Logo",
        },
    ];
    
    return (
        <section className="py-16 bg-gradient-to-tr from-[#410f06] via-[#410f06] to-[#aa833f] pt-5 pb-5 other-hotel-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="col-12">
                    <div className="rx-banner text-center rx-banner-effects">
                        <h5 className="other-hotel-head">
                            Other Hotels by The Elegance Group
                        </h5>
                    </div>
                </div>
                
                {/* Using d-flex (flex) for side-by-side and center alignment */}
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-4 gap-md-0">
                    {hotels.map((hotel) => (
                        <div key={hotel.id} className="mx-md-4 mb-4 mb-md-0">
                            <a href={hotel.url} target="_blank">   
                                <div className="group bg-[#410f06] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-[#ffff] " style={{width:'350px' }}>
                                    <div className="relative flex items-center justify-center p-2 h-56">                                    
                                        <div className="relative z-10 h-full w-full flex items-center justify-center p-4">
                                            <div className="relative h-32 w-64 transition-transform duration-300 group-hover:scale-105">
                                                <img
                                                    src={hotel.image}
                                                    alt={hotel.alt}
                                                    className="object-contain h-full w-full filter drop-shadow-lg"
                                                />
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-200 rounded-2xl transition-colors duration-300 pointer-events-none"></div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherHotelsSection;
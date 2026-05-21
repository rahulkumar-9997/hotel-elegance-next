import Link from 'next/link';
import { LeftShapeSVG, RightShapeSVG } from '../SVG/BannerShapes';
const OtherHotelsSection = () => {
    return (
        <section className="py-16 bg-[#eae7e1] pt-5 pb-5 other-hotel-section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="col-12">
                    <div className="rx-banner text-center rx-banner-effects">
                        <h5 className="other-hotel-head">
                            Other Hotels by The Elegance Group
                        </h5>
                    </div>
                </div>
                <div className="flex flex-col gap-5 py-6 max-w-5xl mx-auto">
                    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_480px] shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-3 flex flex-col gap-2.5 bg-[#9a5e2a] text-white lg:order-1 order-2">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-white/80 uppercase tracking-widest">
                                    Varanasi, Uttar Pradesh
                                </span>
                                <span className="text-4xl font-semibold text-white/60 leading-none">
                                    01
                                </span>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Elegance Inn</h2>
                            <hr className="border-white/20 my-1" />
                            <p className="text-sm text-white leading-relaxed flex-1">
                                Elegance Inn is a comfortable stay in Varanasi, conveniently located in
                                front of PDR Mall, near Kashi Vishwanath Temple and close to
                                Dashashwamedh Ghat — perfect for travelers looking for easy access to
                                the city's top attractions.
                            </p>
                            <a
                                href="https://www.eleganceinnvns.com/"
                                target="_blank"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-white border border-white/40 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors w-fit mt-1"
                            >
                                Explore Hotel <i className="icon-5" />
                            </a>
                        </div>
                        <div className="relative h-64 md:h-auto order-1 lg:order-2">
                            <img
                                src="/assets/dev-img/other-hotel/elegance-inn.png"
                                alt="Elegance Inn"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_480px] shadow-sm hover:shadow-md transition-shadow">
                        <div className="p-4 flex flex-col gap-2.5 bg-[#9a5e2a] text-white lg:order-1 order-2">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-white/80 uppercase tracking-widest">
                                    Gandhi Nagar, Naria Road, Varanasi - 221005
                                </span>
                                <span className="text-4xl font-semibold text-white/60 leading-none">
                                    02
                                </span>
                            </div>
                            <h2 className="text-2xl font-semibold text-white">Dev Elegance</h2>
                            <hr className="border-white/20 my-1" />
                            <p className="text-sm text-white leading-relaxed flex-1">
                                Dev Residency – A Unit of The Elegance, one of the best 3-star and budget hotels in Varanasi. Conveniently located near Kashi Vishwanath Temple, close to Dashashwamedh Ghat, and near Varanasi Railway Station, offering a comfortable stay in the heart of Kashi.
                            </p>
                            <a
                                href="https://www.devtheelegance.com/"
                                target="_blank"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-white border border-white/40 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors w-fit mt-1"
                            >
                                Explore Hotel <i className="icon-5" />
                            </a>
                        </div>
                        <div className="relative h-64 md:h-auto order-1 lg:order-2">
                            <img
                                src="/assets/dev-img/other-hotel/dev-elegance.png"
                                alt="Dev Elegance"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OtherHotelsSection;
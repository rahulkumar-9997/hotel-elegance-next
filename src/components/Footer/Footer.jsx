import React from 'react';
import Link from 'next/link';  
import FooterPhoneNumbers from './FooterPhoneNumbers/FooterPhoneNumbers';  
const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer>
                <div className="rx-main-footer">
                    <div className="container">
                        <div className="row mb-minus-24">
                            <div className="col-md-6 col-lg-4 col-xl-5 wow fadeInUp animated footer-order-1">
                                <div className="rx-social-media footer-widget--about">
                                    <div className="mobile-flex">
                                        <div className="rx-logo">
                                            <img src="/assets/dev-img/logo/logo-bg.jpg" alt="logo" />
                                        </div>
                                        <div className="inner-contact">
                                            <p>
                                                Our hotel seamlessly blends timeless charm with modern
                                                amenities, <br />
                                                offering an unparalleled experience for travelers.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rx-footer-inner-contact social-icon">
                                        <div className="rx-footer-last-logo">
                                            <div className="rx-inner-footer-logo">
                                                <a
                                                    target="_blank"
                                                    href="https://www.facebook.com/theelegancehotel/"
                                                >
                                                    <i className="ri-facebook-line" />
                                                </a>
                                            </div>
                                            <div className="rx-inner-footer-logo">
                                                <a
                                                    target="_blank"
                                                    href="https://www.instagram.com/theelegancehotel/"
                                                >
                                                    <i className="ri-instagram-line" />
                                                </a>
                                            </div>
                                            <div className="rx-inner-footer-logo">
                                                <a href="https://api.whatsapp.com/send?phone=+918810719088&text=Hi! I need your help with a booking for Hotel Elegance">
                                                    <i className="ri-whatsapp-line" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp animated col-420-full  footer-order-2">
                                <div className="rx-footer-items footer-widget--links">
                                    <div className="rx-items-heading">
                                        <h4>Links</h4>
                                    </div>
                                    <div className="rx-items-contact">
                                        <ul>
                                            <li>
                                                <Link href="/hotel-rooms-in-varanasi">Room</Link>
                                            </li>
                                            <li>
                                                <Link href="/budget-restaurant-varanasi">Restaurant</Link>
                                            </li>
                                            <li>
                                                <Link href="/best-banquet-budget-varanasi">Banquets</Link>
                                            </li>
                                            <li>
                                                <Link href="/best-lounge-varansasi-tafri-elegance">Tafri Lounge</Link>
                                            </li>
                                            <li>
                                                <Link href="/facilities">Facilities</Link>
                                            </li>
                                            <li>
                                                <Link href="/gallery">Gallery</Link>
                                            </li>
                                            <li>
                                                <Link href="/contact">Contact Us</Link>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-4 wow fadeInUp animated col-420-full  footer-order-5">
                                <div className="rx-footer-other-info footer-widget--contact">
                                    <div className="inner-info">
                                        <h5>Contact</h5>
                                        <p>
                                            N 10/60, Kakarmatta, DLW Road,
                                            <br />
                                            near Banaras Railway Station,
                                            <br />
                                            Varanasi, Uttar Pradesh - 221004
                                        </p>
                                    </div>
                                    <div className="inner-info">
                                        <h5>Email</h5>
                                        <a href="mailto:theelegance.kashi@gmail.com">
                                            theelegance.kashi@gmail.com
                                        </a>
                                    </div>
                                    <div className="inner-info">
                                        <h5>Phone No</h5>
                                         <FooterPhoneNumbers/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rx-footer-copy">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="rx-footer-inner-contact">
                                    <div className="rx-footer-left-side-contact text-center">
                                        <p>
                                            © 2025 <a href="#">www.theelegance.co.in</a>, All Rights
                                            Reserved. | Website Designed &amp; Maintained by{" "}
                                            <a href="https://wizards.co.in/" target="_blank">
                                                Wizards Next LLP.
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Back to top  */}
            <a href="#Top" className="back-to-top result-placeholder">
                <i className="ri-arrow-up-double-fill" />
                <div className="back-to-top-wrap active-progress">
                    <svg viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>
            </a>
        </>

    )
}

export default Footer
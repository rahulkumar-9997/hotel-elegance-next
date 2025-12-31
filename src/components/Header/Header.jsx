"use client";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

export const Header = () => {
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const overlayRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    const handleSubmenuToggle = (e) => {
        const target = e.target;
        const isMenuToggle = target.classList.contains('menu-toggle');
        const isParentWithSubmenu = target.closest('li')?.querySelector('.sub-menu');

        if ((target.getAttribute('href') === 'javascript:void(0)' || isMenuToggle) && isParentWithSubmenu) {
            e.preventDefault();
            const parentLi = target.closest('li');
            const subMenu = parentLi.querySelector('.sub-menu');

            if (parentLi.classList.contains('active')) {
                parentLi.classList.remove('active');
                subMenu.style.display = 'none';
            } else {
                const activeMenus = parentLi.parentElement.querySelectorAll('li.active');
                activeMenus.forEach(menu => {
                    menu.classList.remove('active');
                    const otherSubMenu = menu.querySelector('.sub-menu');
                    if (otherSubMenu) otherSubMenu.style.display = 'none';
                });

                parentLi.classList.add('active');
                subMenu.style.display = 'block';
            }
        }
    };

    return (
        <header>
            <div className="header-top hidden lg:block">
                <div className="container">
                    <div className="inner-box">
                        {/* top-left */}
                        <div className="top-left">
                            <span>
                                <i className="ri-user-location-fill" />N 10/60, Kakarmatta, DLW
                                Road, near Banaras Railway Station, Varanasi, Uttar Pradesh - 221004
                            </span>
                        </div>
                        {/* Top-right */}
                        <div className="top-right">
                            <ul className="social-icon-one">
                                <li>Follow Us :</li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.facebook.com/theelegancehotel/"
                                    >
                                        <i className="ri-facebook-line" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/theelegancehotel/"
                                    >
                                        <i className="ri-instagram-line" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://api.whatsapp.com/send?phone=+918810719088&text=Hi! I need your help with a booking for Hotel Elegance">
                                        <i className="ri-whatsapp-line" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`rx-header ${isHeaderFixed ? 'header-fixed' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="rx-inner-menu-desk">
                                <Link href="/" className="rx-header-btn">
                                    <img src="assets/dev-img/logo/logo-bg.jpg" alt="logo" />
                                </Link>
                                <button
                                    className="navbar-toggler shadow-none rx-toggle-menu"
                                    type="button"
                                    onClick={toggleMobileMenu}
                                    aria-label="Toggle navigation"
                                >
                                    <i className="ri-menu-2-line" />
                                </button>
                                <div className="rx-main-menu" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/rooms">
                                                Rooms
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/restaurant">
                                                Restaurant
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/banquets">
                                                Banquets
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/tafri-lounge">
                                                Tafri Lounge
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/facilities">
                                                Facilities
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/gallery">
                                                Gallery
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/tariff">
                                                Tariff
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="header-button">
                                        <a
                                            href="javascript:void(0)"
                                            className="rx-btn-one"
                                            data-bs-toggle="modal"
                                            data-bs-target="#rx_booking_from"
                                        >
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`rx-mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                ref={overlayRef}
                onClick={closeMobileMenu}
            />

            {/* Mobile Menu */}
            <div
                className={`rx-mobile-menu ${isMobileMenuOpen ? 'rx-menu-open' : ''}`}
                ref={mobileMenuRef}
            >
                <div className="rx-menu-title">
                    <span className="menu_title">My Menu</span>
                    <button
                        type="button"
                        className="rx-close-menu"
                        onClick={closeMobileMenu}
                    >
                        ×
                    </button>
                </div>
                <div className="rx-menu-inner">
                    <div className="rx-menu-contact" onClick={handleSubmenuToggle}>
                        <ul>
                            <li>
                                <a href="javascript:void(0)">Home</a>
                                <span className="menu-toggle"></span>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="index.html">Hotel</a>
                                    </li>
                                    <li>
                                        <a href="demo-2.html">Restaurant</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Category</a>
                                <span className="menu-toggle"></span>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="gallery.html">Gallery 1</a>
                                    </li>
                                    <li>
                                        <a href="gallery-2.html">Gallery 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Room</a>
                                <span className="menu-toggle"></span>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="rooms.html">Rooms 1</a>
                                    </li>
                                    <li>
                                        <a href="rooms-2.html">Rooms 2</a>
                                    </li>
                                    <li>
                                        <a href="rooms-3.html">Rooms 3</a>
                                    </li>
                                    <li>
                                        <a href="room-details.html">Rooms details</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Pages</a>
                                <span className="menu-toggle"></span>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="services.html">Services</a>
                                    </li>
                                    <li>
                                        <a href="facilities.html">Facilities</a>
                                    </li>
                                    <li>
                                        <a href="team.html">Team</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">Faq</a>
                                    </li>
                                    <li>
                                        <a href="spa.html">Spa</a>
                                    </li>
                                    <li>
                                        <a href="checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                        <a href="signin.html">Login</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Blog</a>
                                <span className="menu-toggle"></span>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="blog-details.html">Blog Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="restaurant.html">Restaurant</a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-res-lan-curr">
                        {/* Social Start */}
                        <div className="header-res-social">
                            <div className="header-top-social">
                                <ul className="mb-0">
                                    <li className="list-inline-item">
                                        <a href="javascript:void(0)">
                                            <i className="ri-facebook-fill" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="javascript:void(0)">
                                            <i className="ri-twitter-fill" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="javascript:void(0)">
                                            <i className="ri-instagram-line" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="javascript:void(0)">
                                            <i className="ri-linkedin-fill" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Social End */}
                    </div>
                </div>
            </div>
        </header>
    );
};
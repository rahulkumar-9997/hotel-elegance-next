"use client";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import EnquiryModal from '../EnquiryModal/EnquiryModal';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);
    const overlayRef = useRef(null);
    const pathname = usePathname();

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

    useEffect(() => {
        closeMobileMenu();
    }, [pathname]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        // Reset any open submenus
        const activeMenus = document.querySelectorAll('.rx-menu-inner li.active');
        activeMenus.forEach(menu => {
            menu.classList.remove('active');
            const subMenu = menu.querySelector('.sub-menu');
            if (subMenu) subMenu.style.display = 'none';
        });
    };

    const handleMobileMenuClick = (e) => {
        // If clicking on a link (not a menu toggle), close the mobile menu
        const target = e.target;
        const isLink = target.tagName === 'A' && target.getAttribute('href');
        const isLinkChild = target.closest('a') && target.closest('a').getAttribute('href');

        if (isLink || isLinkChild) {
            // Only close if it's not a "javascript:void(0)" link
            const linkElement = isLink ? target : target.closest('a');
            if (linkElement.getAttribute('href') !== 'javascript:void(0)') {
                // Small delay to allow the click to register before closing
                setTimeout(closeMobileMenu, 100);
            }
        }
    };

    const handleSubmenuToggle = (e) => {
        e.preventDefault();
        const target = e.target;
        const isMenuToggle = target.classList.contains('menu-toggle');
        const isParentWithSubmenu = target.closest('li')?.querySelector('.sub-menu');

        if ((target.getAttribute('href') === 'javascript:void(0)' || isMenuToggle) && isParentWithSubmenu) {
            const parentLi = target.closest('li');
            const subMenu = parentLi.querySelector('.sub-menu');

            if (parentLi.classList.contains('active')) {
                parentLi.classList.remove('active');
                subMenu.style.display = 'none';
            } else {
                // Close other open submenus
                const activeMenus = parentLi.parentElement.querySelectorAll('li.active');
                activeMenus.forEach(menu => {
                    menu.classList.remove('active');
                    const otherSubMenu = menu.querySelector('.sub-menu');
                    if (otherSubMenu) otherSubMenu.style.display = 'none';
                });

                // Open clicked submenu
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
                                    <img src="/assets/dev-img/logo/logo-bg.jpg" alt="logo" />
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
                                            <Link className="nav-link" href="/hotel-rooms-in-varanasi">
                                                Rooms
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/budget-restaurant-varanasi">
                                                Restaurant
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/best-banquet-budget-varanasi">
                                                Banquets
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/best-lounge-varansasi-tafri-elegance">
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
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/blog">
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="header-button">
                                        <a
                                            className="rx-btn-one rounded cursor-pointer"
                                            onClick={() => setIsModalOpen(true)}
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
                <div className="rx-menu-inner" onClick={handleMobileMenuClick}>
                    <div className="rx-menu-contact">
                        <ul>
                            <li>
                                <Link href="/hotel-rooms-in-varanasi">
                                    Rooms
                                </Link>
                            </li>
                            <li>
                                <Link href="/budget-restaurant-varanasi">
                                    Restaurant
                                </Link>
                            </li>
                            <li>
                                <Link href="/best-banquet-budget-varanasi">
                                    Banquets
                                </Link>
                            </li>
                            <li>
                                <Link href="/best-lounge-varansasi-tafri-elegance">
                                    Tafri Lounge
                                </Link>
                            </li>
                            <li>
                                <Link href="/facilities">
                                    Facilities
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/tariff">
                                    Tariff
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-res-lan-curr">
                        {/* Social Start */}
                        <div className="header-res-social">
                            <div className="header-top-social">
                                <ul className="mb-0">
                                    <li className="list-inline-item">
                                        <a
                                            target="_blank"
                                            href="https://www.facebook.com/theelegancehotel/"
                                        >
                                            <i className="ri-facebook-fill" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            target="_blank"
                                            href="https://www.instagram.com/theelegancehotel/"
                                        >
                                            <i className="ri-instagram-line" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://api.whatsapp.com/send?phone=+918810719088&text=Hi! I need your help with a booking for Hotel Elegance">
                                            <i className="ri-whatsapp-line" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Social End */}
                    </div>
                </div>
            </div>
            <EnquiryModal
                isOpen={isModalOpen}
                title="Contact Us"
                onClose={() => setIsModalOpen(false)}
            />
        </header>
    );
};
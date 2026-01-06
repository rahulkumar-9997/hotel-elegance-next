'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
const FooterPhoneNumbers = () => {
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        setMounted(true);
    }, []);
    const getPhoneNumbers = () => {
        if (!mounted) {
            return {
                primary: '+91 88107 19088',
                secondary: '+91 87568 82728',
                primaryHref: 'tel:+918810719088',
                secondaryHref: 'tel:+918756882728'
            };
        }
        if (pathname === '/budget-restaurant-varanasi') {
            return {
                primary: '+91 88107 19089',
                secondary: '+91 90440 54693',
                primaryHref: 'tel:+918810719089',
                secondaryHref: 'tel:+919044054693'
            };
        } else if (pathname === '/best-banquet-budget-varanasi') {
            return {
                primary: '+91 88107 19093',
                secondary: '+91 88107 19091',
                primaryHref: 'tel:+918810719093',
                secondaryHref: 'tel:+918810719091'
            };
        } else if (pathname === '/best-lounge-varansasi-tafri-elegance') {
            return {
                primary: '+91 95111 19443',
                secondary: '+91 90440 54693',
                primaryHref: 'tel:+919511119443',
                secondaryHref: 'tel:+919044054693'
            };
        } else {
            return {
                primary: '+91 88107 19088',
                secondary: '+91 87568 82728',
                primaryHref: 'tel:+918810719088',
                secondaryHref: 'tel:+918756882728'
            };
        }
    };

    const phoneNumbers = getPhoneNumbers();

    return (
        <>
            <a href={phoneNumbers.primaryHref}>{phoneNumbers.primary}</a>
            <br />
            <a href={phoneNumbers.secondaryHref}>{phoneNumbers.secondary}</a>
        </>
    );
};

export default FooterPhoneNumbers;
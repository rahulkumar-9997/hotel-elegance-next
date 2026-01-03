"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { imageTosvg } from '@/utils/imageToSvg';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        title: 'Contact Page Enquiry',
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitMessage, setSubmitMessage] = useState('');
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
        if (typeof window !== 'undefined') {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => {
                    imageTosvg();
                });
            } else {
                imageTosvg();
            }
        }
    }, []);
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
        if (errors[id]) {
            setErrors(prev => ({
                ...prev,
                [id]: ''
            }));
        }
        if (submitStatus) {
            setSubmitStatus(null);
            setSubmitMessage('');
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 3) {
            newErrors.name = 'Name must be at least 3 characters';
        } else if (formData.name.trim().length > 100) {
            newErrors.name = 'Name cannot exceed 100 characters';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        } else if (formData.email.length > 150) {
            newErrors.email = 'Email cannot exceed 150 characters';
        }
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        } else if (formData.subject.trim().length < 3) {
            newErrors.subject = 'Subject must be at least 3 characters';
        } else if (formData.subject.trim().length > 150) {
            newErrors.subject = 'Subject cannot exceed 150 characters';
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);
        setSubmitStatus(null);
        setSubmitMessage('');
        try {
            const enquiryData = {
                title: formData.title,
                name: formData.name.trim(),
                email: formData.email.trim(),
                subject: formData.subject.trim(),
                message: formData.message.trim()
            };
            const response = await fetch('https://www.inforbit.in/demo/hotel-elegance-backend/api/enquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(enquiryData)
            });
            const result = await response.json();
            if (response.ok && result.status === true) {
                setFormData({
                    title: 'Contact Page Enquiry',
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setSubmitStatus('success');
                setSubmitMessage(result.message || 'Message sent successfully! We will contact you soon.');
                setTimeout(() => {
                    document.querySelector('.rx-contact-form')?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }, 100);

            } else {
                setSubmitStatus('error');
                if (result.errors) {
                    const serverErrors = {};
                    Object.keys(result.errors).forEach(key => {
                        serverErrors[key] = result.errors[key][0];
                    });
                    setErrors(serverErrors);
                    setSubmitMessage('Please correct the errors below.');
                } else {
                    setSubmitMessage(result.message || 'Failed to submit enquiry. Please try again.');
                }
            }

        } catch (error) {
            console.error('Enquiry submission error:', error);
            setSubmitStatus('error');
            setSubmitMessage('Network error. Please check your connection and try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Breadcrumb */}
            <Breadcrumb 
                title="Contact Us" 
                backgroundImage="/assets/img/banner/banner.jpg"
                subtitle=""
            />
            <section className="py-10 md:py-10 bg-gradient-to-b from-gray-50 to-white contact-us-card">
                <div className="max-w-7xl mx-auto px-1 sm:px-1 lg:px-1">
                    <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Address Card */}
                        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col sm:flex-row gap-3 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-[#410f06] group-hover:bg-[#410f06] group-hover:text-white! transition-colors duration-300">
                                    <i className="text-2xl ri-user-location-fill"></i>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                    Visit Us
                                </h3>
                                <address className="text-gray-600 not-italic space-y-1">
                                    <p className="leading-relaxed">
                                        N 10/60, Kakarmatta, DLW Road,<br />
                                        Near Banaras Railway Station,<br />
                                        Varanasi, Uttar Pradesh - 221004
                                    </p>
                                </address>
                                <div className="mt-4">
                                    <a
                                        href="https://maps.google.com/maps?width=1405&height=568&hl=en&q=Kakarmatta N.10/60 AM Kakarmatta, DLW Varanasi (U.P) 221106, Varanasi, Uttar Pradesh 221004&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-[#410f06]! font-medium hover:text-primary/80 transition-colors duration-300"
                                    >
                                        View on Maps
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col sm:flex-row gap-3 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-[#410f06] group-hover:bg-[#410f06] group-hover:text-white! transition-colors duration-300">
                                    <i className="text-2xl ri-headphone-fill"></i>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                    Call Us
                                </h3>
                                <div className="space-y-3">
                                    <div>
                                        <a
                                            href="tel:+918810719088"
                                            className="text-black! transition-colors duration-300 text-lg font-medium block"
                                        >
                                            +91 88107 19088
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="tel:+918756882728"
                                            className="text-gray-900 hover:text-primary transition-colors duration-300 text-lg font-medium block"
                                        >
                                            +91 87568 82728
                                        </a>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-3">
                                    Available Monday - Saturday, 9AM - 6PM
                                </p>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 flex flex-col sm:flex-row gap-3 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-[#410f06] group-hover:bg-[#410f06] group-hover:text-white! transition-colors duration-300">
                                    <i className="text-2xl ri-mail-add-fill"></i>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                    Email Us
                                </h3>
                                <a
                                    href="mailto:theelegance.kashi@gmail.com"
                                    className="text-gray-900 hover:text-primary transition-colors duration-300 text-lg font-medium block mb-2 break-words"
                                >
                                    theelegance.kashi@gmail.com
                                </a>
                                <p className="text-sm text-gray-500">
                                    We typically respond within 24 hours
                                </p>
                                <div className="mt-4">
                                    <a
                                        href="mailto:theelegance.kashi@gmail.com"
                                        className="inline-flex items-center px-4 py-2 bg-primary/10 text-[#410f06]! font-medium rounded-lg hover:bg-[#410f06]! hover:text-white! transition-all duration-300"
                                    >
                                        Send Message
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-contact padding-t-40 padding-b-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="rx-contact-form bg-gradient-to-tr from-[#410f06] via-[#410f06] to-[#aa833f] backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-700/50">

                                {/* Success/Error Messages */}
                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-green-200">
                                                    ✓ {submitMessage}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {submitStatus === 'error' && submitMessage && (
                                    <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-red-200">
                                                    ✗ {submitMessage}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="row mb-minus-24">
                                    <div className="col-lg-6 col-12 mb-24">
                                        <div className="rx-contact-touch-ifrem">
                                            <iframe
                                                src="https://maps.google.com/maps?width=1405&height=568&hl=en&q=Kakarmatta N.10/60 AM Kakarmatta, DLW Varanasi (U.P) 221106, Varanasi, Uttar Pradesh 221004&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                                className="w-full h-[400px] rounded-lg"
                                                title="Hotel Elegance Location"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-12 mb-24">
                                        <div className="rx-inner-form">
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-lg-6 col-12 mb-24">
                                                        <div className="rx-input-box">
                                                            <label htmlFor="name" className="text-white">Your Name*</label>
                                                            <input
                                                                type="text"
                                                                id="name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                className={`rx-form-control ${errors.name ? 'border-red-500' : ''}`}
                                                                disabled={isSubmitting}
                                                            />
                                                            {errors.name && (
                                                                <div className="text-white text-sm mt-1">{errors.name}</div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-12 mb-24">
                                                        <div className="rx-input-box">
                                                            <label htmlFor="email" className="text-white">Your Email*</label>
                                                            <input
                                                                type="email"
                                                                id="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                className={`rx-form-control ${errors.email ? 'border-red-500' : ''}`}
                                                                disabled={isSubmitting}
                                                            />
                                                            {errors.email && (
                                                                <div className="text-white text-sm mt-1">{errors.email}</div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="col-12 mb-24">
                                                        <div className="rx-input-box">
                                                            <label htmlFor="subject" className="text-white">Your Subject*</label>
                                                            <input
                                                                type="text"
                                                                id="subject"
                                                                value={formData.subject}
                                                                onChange={handleChange}
                                                                className={`rx-form-control ${errors.subject ? 'border-red-500' : ''}`}
                                                                disabled={isSubmitting}
                                                            />
                                                            {errors.subject && (
                                                                <div className="text-white text-sm mt-1">{errors.subject}</div>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="col-12 mb-24">
                                                        <div className="rx-input-box">
                                                            <label htmlFor="message" className="text-white">Message*</label>
                                                            <textarea
                                                                id="message"
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                                className={`rx-form-control ${errors.message ? 'border-red-500' : ''}`}
                                                                rows="4"
                                                                disabled={isSubmitting}
                                                            />
                                                            {errors.message && (
                                                                <div className="text-white text-sm mt-1">{errors.message}</div>
                                                            )}
                                                            <div className="text-right mt-1">
                                                                <span className={`text-xs ${formData.message.length < 10 ? 'text-red-300' : 'text-gray-300'}`}>
                                                                    {formData.message.length}/10 min characters
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="rx-inner-button">
                                                            <button
                                                                type="submit"
                                                                className="rx-btn-two rounded flex items-center justify-center"
                                                                disabled={isSubmitting}
                                                            >
                                                                {isSubmitting ? (
                                                                    <>
                                                                        <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                                        </svg>
                                                                        Sending...
                                                                    </>
                                                                ) : (
                                                                    'Send Message'
                                                                )}
                                                            </button>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
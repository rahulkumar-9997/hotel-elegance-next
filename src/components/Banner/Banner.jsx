"use client";
import { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { toast } from "@/components/ui/toast";
export default function Banner({ initialVideo }) {
    const [open, setOpen] = useState(false);
    const [openSecond, setOpenSecond] = useState(false);
    const [adults, setAdults] = useState(1);
    const [arrivalDate, setArrivalDate] = useState();
    const [departureDate, setDepartureDate] = useState();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const [videoError, setVideoError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const API_URL = 'https://www.inforbit.in/demo/hotel-elegance-backend/api/home-enquiry';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (!arrivalDate || !departureDate) {
            toast.error('Please select both arrival and departure dates');
            setIsLoading(false);
            return;
        }
        const phoneRegex = /^[0-9]{8,15}$/;
        if (!phoneRegex.test(phoneNumber)) {
            toast.error('Please enter a valid phone number (8-15 digits)');
            setIsLoading(false);
            return;
        }
        if (departureDate <= arrivalDate) {
            toast.error('Departure date must be after arrival date');
            setIsLoading(false);
            return;
        }
        const formData = {
            arrival: format(arrivalDate, 'yyyy-MM-dd'),
            departure: format(departureDate, 'yyyy-MM-dd'),
            adult: adults,
            phone: phoneNumber
        };
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok && data.status) {
                toast.success(data.message || 'Enquiry submitted successfully! We will contact you soon.');
                setIsSubmitted(true);
                setTimeout(() => {
                    resetForm();
                }, 3000);
            } else {
                toast.error(data.message || 'Failed to submit enquiry. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            toast.error('Network error. Please check your connection and try again.');
        } finally {
            setIsLoading(false);
        }
    };
    const resetForm = () => {
        setArrivalDate();
        setDepartureDate();
        setAdults(1);
        setPhoneNumber("");
        setIsSubmitted(false);
    };
    useEffect(() => {
        if (initialVideo) {
            setVideoLoading(true);
            const videoElement = document.createElement('video');
            videoElement.src = initialVideo;
            videoElement.onloadeddata = () => setVideoLoading(false);
            videoElement.onerror = () => {
                setVideoLoading(false);
                setVideoError(true);
            };
        } else {
            setVideoLoading(false);
            setVideoError(true);
        }
    }, [initialVideo]);
    return (
        <section className="section-hero margin-b-0">
            <div className="container-fulid">
                <div className="row">
                    <div className="col-12">
                        <div className="youtube-video-container relative">
                            {videoLoading && (
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse z-10 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 border-4 border-gray-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                                        <p className="text-gray-600 font-medium">Loading video...</p>
                                    </div>
                                </div>
                            )}
                            {videoError && !videoLoading && (
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 z-10 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Video unavailable</h3>
                                        <p className="text-gray-500">Unable to load the video content</p>
                                    </div>
                                </div>
                            )}
                            <div className="youtube-video-wrapper relative">
                                {initialVideo && !videoError && (
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        className={`w-full h-full object-cover transition-opacity duration-500 ${videoLoading ? 'opacity-0' : 'opacity-100'}`}
                                        onLoadedData={() => setVideoLoading(false)}
                                        onError={() => {
                                            setVideoLoading(false);
                                            setVideoError(true);
                                        }}
                                    >
                                        <source
                                            src={initialVideo}
                                            type="video/mp4"
                                        />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                                <div className="video-overlay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Form Skeleton */}
            <section id="book-room" className="book-now-widget">
                {videoLoading ? (
                    <div className="container desktop animate-pulse">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                            <div className="flex flex-col space-y-2 w-full">
                                <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
                                <div className="h-10 bg-gray-200 rounded"></div>
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                                <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
                                <div className="h-10 bg-gray-200 rounded"></div>
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                                <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
                                <div className="h-10 bg-gray-200 rounded"></div>
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                                <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
                                <div className="h-10 bg-gray-200 rounded"></div>
                            </div>
                            <div className="flex flex-col space-y-2 w-full self-end">
                                <div className="h-11 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <form id="book-now-form" onSubmit={handleSubmit}>
                        <div className="container desktop rounded">
                            <div className="flex flex-col space-y-2 w-full">
                                <Label htmlFor="arrival" className="text-sm font-medium text-gray-700 heading">
                                    Arrive
                                </Label>
                                <Popover open={open} onOpenChange={setOpen} className="helper-popover" >
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal px-3 py-2 rounded",
                                                !arrivalDate && "text-muted-foreground"
                                            )}
                                            id="arrival"
                                            disabled={isSubmitted}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {arrivalDate ? format(arrivalDate, "PPP") : "Pick a date"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            className="bg-gray-100"
                                            mode="single"
                                            selected={arrivalDate}
                                            captionLayout="dropdown"
                                            onSelect={(date) => {
                                                setArrivalDate(date)
                                                setOpen(false)
                                            }}
                                            initialFocus
                                            disabled={(date) => date < new Date()}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* Departure Date */}
                            <div className="flex flex-col space-y-2 w-full">
                                <Label htmlFor="departure" className="text-sm font-medium text-gray-700 heading">
                                    Depart
                                </Label>
                                <Popover open={openSecond} onOpenChange={setOpenSecond} >
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal px-1 py-3 rounded",
                                                !departureDate && "text-muted-foreground"
                                            )}
                                            id="departure"
                                            disabled={!arrivalDate || isSubmitted}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {departureDate ? format(departureDate, "PPP") : "Pick a date"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={departureDate}
                                            onSelect={(date) => {
                                                setDepartureDate(date)
                                                setOpenSecond(false)
                                            }}
                                            captionLayout="dropdown"
                                            initialFocus
                                            disabled={(date) => {
                                                if (arrivalDate) {
                                                    return date <= arrivalDate || date < new Date();
                                                }
                                                return date < new Date();
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            {/* Adults Select */}
                            <div className="flex flex-col space-y-2 w-full">
                                <Label htmlFor="guests" className="text-sm font-medium text-gray-700 heading">
                                    Adults
                                </Label>
                                <select
                                    className="occupants w-full px-3 py-1.5 border border-input bg-background rounded-md text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                    name="adult"
                                    id="guests"
                                    value={adults}
                                    onChange={(e) => setAdults(Number(e.target.value))}
                                    disabled={isSubmitted}
                                >
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <option key={num} value={num}>
                                            {num} {num === 1 ? 'Adult' : 'Adults'}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col space-y-2 w-full">
                                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 heading">
                                    Phone No.
                                </Label>
                                <input
                                    className="promo-code border px-3 py-2 rounded"
                                    type="text"
                                    id="phone"
                                    name="phone_number"
                                    placeholder="Enter Phone No."
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                                    required
                                    pattern="[0-9]{8,15}"
                                    maxLength={15}
                                    minLength={8}
                                    disabled={isSubmitted}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center mt-3">
                                <Button
                                    variant='default'
                                    type="submit"
                                    className={`w-full rounded font-semibold rounded transition-all duration-300 flex items-center justify-center transform hover:-translate-y-0.5 ${isSubmitted
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-[#410f06] text-white hover:bg-[#310b04] hover:shadow-lg'
                                        }`}
                                    id="check-availability"
                                    disabled={isLoading || !arrivalDate || !departureDate || !phoneNumber || isSubmitted}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : isSubmitted ? (
                                        "Submitted"
                                    ) : (
                                        "Book Now"
                                    )}
                                </Button>
                            </div>
                        </div>
                    </form>
                )}
            </section>
        </section>
    );
}
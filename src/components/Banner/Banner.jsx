"use client";
import { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export default function Banner({ initialVideo }) {
    const [open, setOpen] = useState(false)
    const [openSecond, setOpenSecond] = useState(false)
    const [adults, setAdults] = useState(1);
    const [arrivalDate, setArrivalDate] = useState();
    const [departureDate, setDepartureDate] = useState();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        console.log({
            arrivalDate,
            departureDate,
            adults,
            phoneNumber
        });

        setTimeout(() => {
            setIsLoading(false);
            alert("Booking request submitted!");
        }, 1000);
    };

    return (
        <section className="section-hero margin-b-0">
            <div className="container-fulid">
                <div className="row">
                    <div className="col-12">
                        <div className="youtube-video-container">
                            <div className="youtube-video-wrapper">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-full object-cover"
                                >
                                    <source
                                        src={initialVideo}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="video-overlay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="book-room" className="book-now-widget">
                <form id="book-now-form" onSubmit={handleSubmit}>
                    <div className="container desktop">

                        {/* Arrival Date */}
                        <div className="flex flex-col space-y-2 min-w-[150px]">
                            <Label htmlFor="arrival" className="text-sm font-medium text-gray-700 heading">
                                Arrive
                            </Label>
                            <Popover open={open} onOpenChange={setOpen} className="helper-popover" >
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal px-1 py-3 rounded",
                                            !arrivalDate && "text-muted-foreground"
                                        )}
                                        id="arrival"
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
                                        onSelect={(arrivalDate) => {
                                            setArrivalDate(arrivalDate)
                                            setOpen(false)
                                        }}
                                        initialFocus
                                        disabled={(date) => date < new Date()}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* Departure Date */}
                        <div className="flex flex-col space-y-2 min-w-[150px]">
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
                                        disabled={!arrivalDate}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {departureDate ? format(departureDate, "PPP") : "Pick a date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={departureDate}
                                        onSelect={(departureDate) => {
                                            setDepartureDate(departureDate)
                                            setOpenSecond(false)
                                        }}
                                        captionLayout="dropdown"
                                        initialFocus
                                        disabled={(date) => {
                                            if (arrivalDate) {
                                                return date < arrivalDate || date < new Date();
                                            }
                                            return date < new Date();
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        {/* Adults Select */}
                        <div className="flex flex-col space-y-2 min-w-[120px]">
                            <Label htmlFor="guests" className="text-sm font-medium text-gray-700 heading">
                                Adults
                            </Label>
                            <select
                                className="occupants w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                name="adult"
                                id="guests"
                                value={adults}
                                onChange={(e) => setAdults(Number(e.target.value))}
                            >
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>
                                        {num} {num === 1 ? 'Adult' : 'Adults'}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Phone Number */}
                        <div className="flex flex-col space-y-2 min-w-[200px]">
                            <Label htmlFor="phone" className="text-sm font-medium text-gray-700 heading">
                                Phone No.
                            </Label>
                            <input
                                className="promo-code"
                                type="text"
                                id="phone"
                                name="phone_number"
                                placeholder="Enter Phone No."
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                pattern="[0-9]{10}"
                                maxLength={10}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <Button
                            variant='default'
                                type="submit"
                                className="w-full rounded bg-[#410f06] text-white font-semibold rounded transition-all duration-300 flex items-center justify-center hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5"
                                id="check-availability"
                                disabled={isLoading || !arrivalDate || !departureDate || !phoneNumber}
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    "Book Now"
                                )}
                            </Button>
                        </div>
                    </div>
                </form>
            </section>
        </section>
    );
}
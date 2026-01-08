import Banner from "@/components/Banner/Banner";
import { pageMeta } from "@/utils/metadata";
import { HomeAboutUs } from "@/components/HomeAboutUs/HomeAboutUs";
import { OurBestServices } from "@/components/OurBestServices/OurBestServices";
import { AccommodationDining } from "@/components/AccommodationDining/AccommodationDining";
import { BestRoom } from "@/components/Rooms/BestRooms/BestRoom";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { NearByPlace } from "@/components/NearByPlace/NearByPlace";
import { PositionedUnique } from "@/components/PositionedUnique/PositionedUnique";
import { NearbyByAttraction } from "@/components/NearbyByAttraction/NearbyByAttraction";
import { Flyers } from "@/components/Flyers/Flyers";
import { Suspense } from "react";
import BannerWrapper from "@/components/Banner/BannerWrapper";
import NearByPlaceWrapper from "@/components/NearByPlace/NearByPlaceWrapper";
import NearByAttractionWrapper from "@/components/NearbyByAttraction/NearByAttractionWrapper";
import FlyersWrapper from "@/components/Flyers/FlyersWrapper";
import TestimonialsWrapper from "@/components/Testimonials/TestimonialsWrapper";
import HomeBlogWrapper from "@/components/HomeBlog/HomeBlogWrapper";
import OtherHotelsSection from "@/components/OtherHotelsSection/OtherHotelsSection";
export const metadata = pageMeta(
  "The Elegance Best Hotel in Varanasi near Railway Station", 
  "The Elegance - Best Boutique Hotel in Varanasi near Banaras Railway Station and BHU. Situated close to BLW, the Hotel is the best place for Stay in Varanasi."
);
export default function Home() {
  return (
    <>
      <Suspense fallback="loading">
        <BannerWrapper /> 
      </Suspense>      
      <HomeAboutUs />
      <OurBestServices/>
      <AccommodationDining/>
      <BestRoom/>
      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <TestimonialsWrapper/>
      </Suspense>
      <Suspense fallback={<div>Loading Nearby Places...</div>}>
        <NearByPlaceWrapper/>
      </Suspense>
      <PositionedUnique/>
      <Suspense fallback={<div>Loading Nearby Attractions...</div>}>
        <NearByAttractionWrapper/>
      </Suspense> 
      <OtherHotelsSection/>     
      <Suspense fallback={<div>Loading Blog...</div>}>
        <HomeBlogWrapper/>
      </Suspense>
      <Suspense fallback={<div>Loading Flyers...</div>}>
        <FlyersWrapper/>
      </Suspense>

    </>
  );
}

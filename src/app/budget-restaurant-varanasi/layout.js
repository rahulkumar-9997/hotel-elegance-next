import { pageMeta } from "@/utils/metadata";
export const metadata = pageMeta(
  "Best Indian Restaurant in Varanasi | The Elegance", 
  "Hotel Elegance in Varanasi is famous for best Indian, Chinese and Continental Cuisine. They provide Best culinary experience in their 2 Restaurants with GReat offers."
);

export default function RestaurantLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
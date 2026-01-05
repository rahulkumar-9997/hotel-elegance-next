import { pageMeta } from "@/utils/metadata";
export const metadata = pageMeta(
  "Best Budget Restaurant in Varanasi for Family Dining", 
  "Searching for a budget restaurant in Varanasi? Enjoy tasty food, warm ambience, and great service at The Elegance—perfect for families & friends."
);

export default function RestaurantLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
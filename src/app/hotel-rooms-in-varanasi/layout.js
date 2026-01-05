import { pageMeta } from "@/utils/metadata";
export const metadata = pageMeta(
  "Comfortable Hotel Rooms in Varanasi at Best Prices | Elegance", 
  "Looking for comfortable hotel rooms in Varanasi? Enjoy modern amenities, peaceful stays, and great value at The Elegance. Book your stay today."
);

export default function RoomsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
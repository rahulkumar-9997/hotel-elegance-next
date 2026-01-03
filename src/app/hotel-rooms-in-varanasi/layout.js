import { pageMeta } from "@/utils/metadata";
export const metadata = pageMeta(
  "Best Hotel in Varanasi for Accommodation | The Elegance", 
  "Hotel Elegance in Varanasi provides you best Accommodation with their exclusive Rooms at best budget rates. They Suit Rooms, Premium Rooms, King Size Rooms also."
);

export default function RoomsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
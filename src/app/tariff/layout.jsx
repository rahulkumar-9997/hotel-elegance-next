import { pageMeta } from "@/utils/metadata";
export const metadata = pageMeta(
  "Best tariff Rooms in Varanasi", 
  "Are you planning a trip to Varanasi, India's heart of spirit? We'll guide you to the best spots to stay."
);

export default function TariffLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
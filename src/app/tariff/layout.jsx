import { pageMeta } from "@/utils/metadata";
export const metadata = pageMeta(
  "Hotel Room Tariff in Varanasi | Best Prices at Elegance", 
  "Check hotel room tariffs in Varanasi at The Elegance. Affordable pricing, premium comfort, and great value for business and leisure stays."
);

export default function TariffLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
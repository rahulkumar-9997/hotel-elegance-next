import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { ToastDisplay } from '@/components/ui/toast';
import Script from "next/script";
export const metadata = {
  title: "The Elegance Best Hotel in Varanasi near Railway Station",
  description:
    "The Elegance - Best Boutique Hotel in Varanasi near Banaras Railway Station and BHU. Situated close to BLW, the Hotel is the best place for Stay in Varanasi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="/assets/dev-img/logo/fav.png"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css?v=1.0.0" />
        <link rel="stylesheet" href="/assets/css/vendor/remixicon.css?v=1.0.0" />
        {/* <link rel="stylesheet" href="assets/css/vendor/aos.css" /> */}
        {/* <link rel="stylesheet" href="assets/css/vendor/animate.min.css" /> */}
        {/* <link rel="stylesheet" href="assets/css/vendor/jquery.fancybox.min.css"/> */}
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css?v=1.0.0"/>
        {/* <link rel="stylesheet" href="assets/css/vendor/slick.min.css" />
        <link rel="stylesheet" href="assets/css/vendor/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/vendor/swiper-bundle.min.css" /> */}
        {/* Main Style */}
        <link rel="stylesheet" href="/assets/css/style.css?v=3.0.0" />        
      </head>
      <body>
        <div className="page-wraper">
          <Header />
          {children}
          <ToastDisplay />
          <Footer />
        </div>
        <script src="/assets/js/vendor/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/vendor/jquery-3.7.1.min.js"></script>
        <script src="/assets/js/vendor/jquery-ui.min.js"></script>
        {/* <script src="assets/js/vendor/aos.js"></script>
        <script src="assets/js/vendor/smoothscroll.min.js"></script>
        <script src="assets/js/vendor/jquery.fancybox.min.js"></script>
        <script src="assets/js/vendor/slick.min.js"></script>
        <script src="assets/js/vendor/owl.carousel.min.js"></script>
        <script src="assets/js/vendor/swiper-bundle.min.js"></script>
        <script src="assets/js/main.js"></script> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZNW7VCL3YL"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZNW7VCL3YL');
          `}
        </Script>
      </body>
    </html>
  );
}

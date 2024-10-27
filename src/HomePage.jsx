/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner/Banner.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Swipe from "./components/Blogs/Swipe.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero.jsx/Hero.jsx";
import Navbar2 from "./components/navbar/Navbar2.jsx";
import { useEffect } from "react";
import Service from "./components/Service/ServicesPage.jsx";
import BannerDetails from "./components/BannerDetails/BannerDetails.jsx";
import Banner1 from "./assets/blog1.jpg";
import Banner2 from "./assets/blog3.jpg";

function HomePage() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden dark:bg-slate-900 dark:text-white">
      <div className="  w-full   from-violet-900 via-violet-800 to-violet-900">
        <Navbar2 />
      </div>
      <Hero />
      <Service />
      <BannerDetails reverse={true} img={Banner1} />
      <BannerDetails img={Banner2} />
      <Banner />
      <Blogs />
      {/* <Swipe /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
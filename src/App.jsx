import { useState } from "react";
import "./App.css";
import "../src/components/Responsive.css";
import Header from "./components/header/Header";
import HeroSlider from "./components/hero/HeroSlider";
import PopularProduct from "./components/popularProducts/PopularProduct";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";
import OurExperties from "./components/OurExperties/OurExperties";
import InquryForm from "./components/inquiryForm/InquryForm";
import FaqAccording from "./components/according/FaqAccording";
import Footer from "./components/Footer/Footer";
import CategouryCarousel from "./components/categoryCarousel/CategouryCarousel";
import Testimonials from "./components/testimonial/Testimonials";
import Banners from "./components/Banners/Banners";
import FeatureProduct from "./components/FeatureProduct/FeatureProduct";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <HeroSlider />
      {/* <ShopbyCategory /> */}
      <PopularProduct />
      <WhyChooseUs />
      <CategouryCarousel />
      <FeatureProduct />
      <OurExperties />
      <Banners />
      <InquryForm />
      <FaqAccording />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;

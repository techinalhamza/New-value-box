import React from "react";
import HeroSlider from "../../components/hero/HeroSlider";
import PopularProduct from "../../components/popularProducts/PopularProduct";
import WhyChooseUs from "../../components/whyChooseUs/WhyChooseUs";
import CategouryCarousel from "../../components/categoryCarousel/CategouryCarousel";
import OurExperties from "../../components/OurExperties/OurExperties";
import Banners from "../../components/Banners/Banners";
import InquryForm from "../../components/inquiryForm/InquryForm";
import Testimonials from "../../components/testimonial/Testimonials";
import FaqAccording from "../../components/according/FaqAccording";

function Home() {
  return (
    <>
      <HeroSlider />
      <PopularProduct />
      <WhyChooseUs />
      <CategouryCarousel />
      <OurExperties />
      <Banners />
      <InquryForm />
      <FaqAccording />
      <Testimonials />
    </>
  );
}

export default Home;

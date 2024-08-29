import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import HeroSlider from "./components/hero/HeroSlider";
import PopularProduct from "./components/popularProducts/PopularProduct";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSlider />
      <PopularProduct />
      <WhyChooseUs />
    </>
  );
}

export default App;

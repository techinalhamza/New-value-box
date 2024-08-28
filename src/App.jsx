import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import HeroSlider from "./components/hero/HeroSlider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroSlider />
    </>
  );
}

export default App;

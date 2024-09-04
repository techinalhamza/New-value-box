import { useState } from "react";
import "./App.css";
import "../src/components/Responsive.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/homePage/Home";
import SingleProduct from "./pages/singleProductPage/SingleProduct";

function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

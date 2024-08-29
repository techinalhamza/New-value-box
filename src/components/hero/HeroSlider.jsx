import React from "react";
import Slider from "react-slick";
import firstSlide from "../../assets/slider1.jpg";
import secSlide from "../../assets/slider2.jpg";
import thirdSlide from "../../assets/slider3.jpg";
import { Button } from "@mui/material";

function HeroSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="w-full h-[80vh]">
          <div
            style={{
              width: "100%",
              height: "100%",
              // background: "#ccc  ",
              // backgroundImage: `url(${secSlide})`, // Corrected here
              // backgroundPosition: "center",
              // backgroundSize: "cover",
              // backgroundRepeat: "no-repeat",
            }}
            className="flex items-center justify-cente"
          >
            <div className="main-container slider-content w-1/2">
              <p>#1 Printing Services</p>
              <div className="slider-h1 mt-4 mb-6">
                <h1 className="text-[4rem] font-bold text-[#075697] leading-[70px]">
                  Eco-Friendly
                </h1>
                <h1 className="text-[4rem] font-bold text-[#075697] leading-[70px]">
                  <i className="font-serif text-[#FAC409]">Packaging</i> Bags
                </h1>
              </div>
              <p className="text-[1.5rem] tracking-[3px]">
                Explore,design and order enviromentally <br />
                conscious packaging
              </p>
              <Button
                style={{
                  background: "#075697",
                  color: "#fff",
                  padding: "10px 20px",
                  marginTop: "1rem",
                }}
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full h-[80vh]">
          <div
            style={{
              width: "100%",
              height: "100%",
              // background: "#ccc  ",
              // backgroundImage: `url(${secSlide})`, // Corrected here
              // backgroundPosition: "center",
              // backgroundSize: "cover",
              // backgroundRepeat: "no-repeat",
            }}
            className="flex items-center justify-cente"
          >
            <div className="main-container slider-content w-1/2">
              <p>#1 Printing Services</p>
              <div className="slider-h1 mt-4 mb-6">
                <h1 className="text-[4rem] font-bold text-[#075697] leading-[70px]">
                  Eco-Friendly
                </h1>
                <h1 className="text-[4rem] font-bold text-[#075697] leading-[70px]">
                  <i className="font-serif text-[#FAC409]">Packaging</i> Bags
                </h1>
              </div>
              <p className="text-[1.5rem] tracking-[3px]">
                Explore,design and order enviromentally <br />
                conscious packaging
              </p>
              <Button
                style={{
                  background: "#075697",
                  color: "#fff",
                  padding: "10px 20px",
                  marginTop: "1rem",
                }}
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full h-[80vh]">
          <div
            style={{
              width: "100%",
              height: "100%",
              // background: "#ccc  ",
              // backgroundImage: `url(${secSlide})`, // Corrected here
              // backgroundPosition: "center",
              // backgroundSize: "cover",
              // backgroundRepeat: "no-repeat",
            }}
            className="flex items-center justify-cente"
          >
            <div className="main-container slider-content w-1/2">
              <p>#1 Printing Services</p>
              <div className="slider-h1 mt-4 mb-6">
                <h1 className="text-[4rem] font-bold text-[#075697] leading-[70px]">
                  Eco-Friendly
                </h1>
                <h1 className="text-[4rem] font-bold text-[#075697] leading-[70px]">
                  <i className="font-serif text-[#FAC409]">Packaging</i> Bags
                </h1>
              </div>
              <p className="text-[1.5rem] tracking-[3px]">
                Explore,design and order enviromentally <br />
                conscious packaging
              </p>
              <Button
                style={{
                  background: "#075697",
                  color: "#fff",
                  padding: "10px 20px",
                  marginTop: "1rem",
                }}
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default HeroSlider;

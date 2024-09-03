import React from "react";
import Slider from "react-slick";
import firstSlide from "/slider6.jpg";
import secSlide from "/slider-7.jpg";
import thirdSlide from "/slider9.jpg";
import { Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";

function HeroSlider() {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    adaptiveHeight: true,
  };
  return (
    <>
      <Slider {...settings}>
        {/* <div className="w-full h-[80vh]">
          <div
            style={{
              width: "100%",
              height: "100%",
              // background: "#ccc  ",
              backgroundImage: `url(${firstSlide})`, // Corrected here
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="flex items-center justify-cente"
          >
            <div className="main-container slider-content w-1/2">
              <p>#1 Printing Services</p>
              <div className="slider-h1 mt-4 mb-6">
                <h1 className="text-[4rem] font-bold text-Blue leading-[70px]">
                  Eco-Friendly
                </h1>
                <h1 className="text-[4rem] font-bold text-Blue leading-[70px]">
                  <i className="font-serif text-Yellow">Packaging </i>
                  Bags
                </h1>
              </div>
              <p className="text-[1.5rem] tracking-[3px]">
                Explore,design and order enviromentally <br />
                conscious packaging
              </p>
              <Button
                style={{
                  background: "var(--blue)",
                  color: "#fff",
                  padding: "10px 20px",
                  marginTop: "1rem",
                }}
                endIcon={<FaArrowRight />}
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div> */}
        {/* <div className="w-full h-[80vh]">
          <div
            style={{
              width: "100%",
              height: "100%",
              // background: "#ccc  ",
              backgroundImage: `url(${secSlide})`, // Corrected here
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="flex "
          >
            <div className="main-container slider-content bg-white w-max p-8 rounded-2xl">
              <p>#1 Printing Services</p>
              <div className="slider-h1 mt-4 mb-6">
                <h1 className="text-[4rem] font-bold text-Blue leading-[70px]">
                  Eco-Friendly
                </h1>
                <h1 className="text-[4rem] font-bold text-Blue leading-[70px]">
                  <i className="font-serif text-Yellow">Packaging </i>
                  Bags
                </h1>
              </div>
              <p className="text-[1.5rem] tracking-[3px]">
                Explore,design and order enviromentally <br />
                conscious packaging
              </p>
              <Button
                style={{
                  background: "var(--blue)",
                  color: "#fff",
                  padding: "10px 20px",
                  marginTop: "1rem",
                }}
                endIcon={<FaArrowRight />}
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div> */}
        <div className="w-full h-[80vh]">
          <div
            style={{
              width: "100%",
              height: "100%",
              // background: "#ccc  ",
              backgroundImage: `url(${thirdSlide})`, // Corrected here
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="flex items-center justify-start"
          >
            <div className="main-container">
              <div
                style={{
                  background: " linear-gradient(90deg, #ffffff, transparent)",
                }}
                className=" slider-content bg-white w-max p-8 rounded-2xl"
              >
                <p>#1 Printing Services</p>
                <div className="slider-h1 mt-4 mb-6">
                  <h1 className="text-[4rem] font-bold text-Blue leading-[70px] sm:text-[2rem] sm:leading-[40px]">
                    Experience the Art of <br />
                    Perfect
                    <i className="font-serif text-Yellow"> Printing </i>
                  </h1>
                </div>
                <p className="text-[1.5rem] tracking-[3px]">
                  Explore,design and order enviromentally <br />
                  conscious packaging
                </p>
                <Button
                  style={{
                    background: "var(--blue)",
                    color: "#fff",
                    padding: "10px 20px",
                    marginTop: "1rem",
                  }}
                  endIcon={<FaArrowRight />}
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default HeroSlider;

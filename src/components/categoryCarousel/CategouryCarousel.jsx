import React from "react";
import Slider from "react-slick";
// import catImg1 from "../../assets/sample-product.jpg";
import catImg1 from "/cosmetic-boxes.png";
import catImg2 from "/custom-software-boxes.png";
import catImg3 from "/soap-boxes.png";
import catImg4 from "/window-boxes.png";
import catImg5 from "/popup-display-boxes.png";
import catImg6 from "/gable-boxes.png";

import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";

function CategouryCarousel() {
  var settings = {
    dots: false, // Hide dots for navigation
    infinite: true, // Enable infinite looping
    speed: 500, // Animation speed
    slidesToShow: 6, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    arrows: true, // Show navigation arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500, // Autoplay speed
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1560, // Breakpoint for larger screens
        settings: {
          slidesToShow: 8, // Adjust number of slides to show
          slidesToScroll: 1, // Adjust number of slides to scroll
        },
      },
      {
        breakpoint: 780, // Breakpoint for medium screens
        settings: {
          slidesToShow: 4, // Adjust number of slides to show
          slidesToScroll: 1, // Adjust number of slides to scroll
        },
      },
      {
        breakpoint: 480, // Breakpoint for small screens
        settings: {
          slidesToShow: 2, // Adjust number of slides to show
          slidesToScroll: 1, // Adjust number of slides to scroll
        },
      },
    ],
  };
  return (
    <>
      <div className="cat-container mb-20">
        <div className="main-container ">
          <div className="category-title-bar flex justify-between my-16">
            <h1 className="text-3xl font-bold text-Blue">
              Shop By
              <i className=" text-Yellow"> Category</i>
            </h1>
            {/* <Button
              style={{
                background: "#075697",
                color: "#fff",
                padding: "6px 20px",
              }}
              endIcon={<FaAngleRight />}
            >
              See All Shop
            </Button> */}
          </div>
          <Slider {...settings}>
            <div className="w-full ">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                  <img src={catImg1} alt="" />
                </div>
                <h1 className="w-40 text-center">Custom Cosmetic Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full ">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                  <img src={catImg2} alt="" />
                </div>
                <h1 className="w-40 text-center">
                  Software & Electronic Boxes
                </h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                  <img src={catImg3} alt="" />
                </div>
                <h1 className="w-40 text-center">Soap Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                  <img src={catImg4} alt="" />
                </div>
                <h1 className="w-40 text-center">Window Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                  <img src={catImg5} alt="" />
                </div>
                <h1 className="w-40 text-center">Popup Display Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="category-info">
                <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                  <img src={catImg6} alt="" />
                </div>
                <h1 className="w-40 text-center">Gable Boxes</h1>
                <div className="category-name"></div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default CategouryCarousel;

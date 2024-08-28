import React from "react";
import Slider from "react-slick";
import firstSlide from "../../assets/first-slide.avif";

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
        <div className="w-full h-screen">
          <div
            style={{
              backgroundImage: `url(${firstSlide})`, // Corrected here
              width: "100%",
              height: "100vh",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </>
  );
}

export default HeroSlider;

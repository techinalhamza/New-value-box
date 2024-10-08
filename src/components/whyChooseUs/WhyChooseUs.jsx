import React from "react";
import { SlSizeFullscreen } from "react-icons/sl";
import image1 from "/custom-size (2).png";
import image2 from "/Custom-materials.png";
import image3 from "/Custom-print (2).png";
import image4 from "/Custom-finishes.png";
import background from "/banner10.jpg";

function WhyChooseUs() {
  return (
    <>
      <div className="why-choose-container ">
        <div className="main-container">
          <div
            className="rounded-lg"
            style={{ background: `url(${background})` }}
          >
            <div className="upper-sec  text-white py-24 pl-8">
              <p>OPTIONS AND MATIERIALS</p>
              <h1 className="text-[24px] font-bold">
                Build your Cosmetics Boxes any way you want
              </h1>
              <p>
                Enjoy endless packaging customization to create the cosmetic
                product packaging you need to succeed
              </p>
            </div>
            {/* <div className="our-choosing-services-box-container flex flex-wrap sm:max-w-full gap-4 mt-8">
              <div
                className="choosing-cards max-w-[19rem] sm:max-w-full  py-8 px-8 rounded-lg"
                style={{
                  background: "linear-gradient( #f6b0e8, #7b1536)",
                }}
              >
                <div className="choose-icon w-16  mb-4">
                  <img src={image1} alt="" />
                </div>
                <div className="choose-title font-bold text-white text-xl">
                  Custom Size
                </div>
                <div className="choose-desc text-white text-sm leading-5 mt-4">
                  Take control and customize the size you need for your apparel
                  packaging to improve waste management for your brand.
                </div>
              </div>
              <div
                className="choosing-cards max-w-[19rem] sm:max-w-full py-8 px-8 rounded-lg"
                style={{
                  background: "linear-gradient( #58a5cce0, #003d69)",
                }}
              >
                <div className="choose-icon w-16  mb-4">
                  <img src={image2} alt="" />
                </div>
                <div className="choose-title font-bold text-white text-xl">
                  Custom Materials
                </div>
                <div className="choose-desc text-white text-sm leading-5 mt-4">
                  Need a specific material to communicate your look and feel?
                  Enjoy the luxury of accessing our extensive library of
                  materials.
                </div>
              </div>
              <div
                className="choosing-cards max-w-[19rem] sm:max-w-full py-8 px-8 rounded-lg"
                style={{
                  background: "linear-gradient(#ffb77096, #d95c00)",
                }}
              >
                <div className="choose-icon w-16  mb-4">
                  <img src={image3} alt="" />
                </div>
                <div className="choose-title font-bold text-white text-xl">
                  Custom print
                </div>
                <div className="choose-desc text-white text-sm leading-5 mt-4">
                  Choose the ideal printing method for your beauty packaging and
                  take advantage of the exterior and interior of your box.
                </div>
              </div>
              <div
                className="choosing-cards max-w-[19rem] sm:max-w-full py-8 px-8 rounded-lg"
                style={{
                  background: "linear-gradient( #6ebb6282, #107800)",
                }}
              >
                <div className="choose-icon w-16  mb-4">
                  <img src={image4} alt="" />
                </div>
                <div className="choose-title font-bold text-white text-xl">
                  Custom finishes
                </div>
                <div className="choose-desc text-white text-sm leading-5 mt-4">
                  Embellish your clothing box with special finishes to create a
                  unique experience that sets you and your competitors apart.
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;

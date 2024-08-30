import React from "react";
import { SlSizeFullscreen } from "react-icons/sl";
import image1 from "../../assets/customize size.webp";
import image2 from "../../assets/custom-material.webp";
import image3 from "../../assets/free design support.webp";
import image4 from "../../assets/Exclusive Finishing.webp";
import background from "../../assets/background2.jpg";

function WhyChooseUs() {
  return (
    <>
      <div className="why-choose-container   py-12">
        <div className="main-container">
          <div className="upper-sec text-center">
            <p>OPTIONS AND MATIERIALS</p>
            <h1 className="text-[24px] font-bold">
              Build your Cosmetics Boxes any way you want
            </h1>
            <p>
              Enjoy endless packaging customization to create the cosmetic
              product packaging you need to succeed
            </p>
          </div>
          <div className="">
            <div className="img rounded-xl overflow-hidden">
              <img src={background} alt="" className="rounded-xl" />
            </div>
            <div className="our-choosing-services-box-container flex gap-4 mt-8">
              <div
                className="choosing-cards  py-8 px-8 rounded-lg"
                style={{
                  background: "linear-gradient( #f6b0e8, #7b1536)",
                }}
              >
                <div className="choose-icon w-16  mb-4">
                  {/* <SlSizeFullscreen style={{ margin: "20px auto" }} /> */}
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
                className="choosing-cards py-8 px-8 rounded-lg"
                style={{
                  background: "linear-gradient( #58a5cce0, #003d69)",
                }}
              >
                <div className="choose-icon w-16  mb-4">
                  {/* <SlSizeFullscreen style={{ margin: "20px auto" }} /> */}
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
                className="choosing-cards py-8 px-8 rounded-lg"
                style={{
                  background: "linear-gradient( #fc9c3d, #7b1536)",
                }}
              >
                <div className="choose-icon w-16  mb-4">
                  {/* <SlSizeFullscreen style={{ margin: "20px auto" }} /> */}
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
                className="choosing-cards py-8 px-8 rounded-lg"
                style={{
                  background: "linear-gradient( #f6b0e8, #7b1536)",
                }}
              >
                <div className="choose-icon w-16  mb-4">
                  {/* <SlSizeFullscreen style={{ margin: "20px auto" }} /> */}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;

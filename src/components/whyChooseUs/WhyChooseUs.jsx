import React from "react";
import { SlSizeFullscreen } from "react-icons/sl";

function WhyChooseUs() {
  return (
    <>
      <div className="why-choose-container mb-12 bg-[#f7f7f7] py-12">
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
          <div className="our-choosing-services-box-container flex gap-4 mt-8">
            <div className="choosing-cards">
              <div className="choose-icon">
                <SlSizeFullscreen />
              </div>
              <div className="choose-title">Custom Size</div>
              <div className="choose-desc">
                Take control and customize the size you need for your apparel
                packaging to improve waste management for your brand.
              </div>
            </div>
            <div className="choosing-cards">
              <div className="choose-icon">
                <SlSizeFullscreen />
              </div>
              <div className="choose-title">Custom Size</div>
              <div className="choose-desc">
                Take control and customize the size you need for your apparel
                packaging to improve waste management for your brand.
              </div>
            </div>
            <div className="choosing-cards">
              <div className="choose-icon">
                <SlSizeFullscreen />
              </div>
              <div className="choose-title">Custom Size</div>
              <div className="choose-desc">
                Take control and customize the size you need for your apparel
                packaging to improve waste management for your brand.
              </div>
            </div>
            <div className="choosing-cards">
              <div className="choose-icon">
                <SlSizeFullscreen />
              </div>
              <div className="choose-title">Custom Size</div>
              <div className="choose-desc">
                Take control and customize the size you need for your apparel
                packaging to improve waste management for your brand.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;

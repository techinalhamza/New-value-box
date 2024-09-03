import React from "react";
import formImg from "/H4-images-9.jpg";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import expertiesSecImg from "/experties-sec-image.jpg";
import expertiesSec2 from "/experties-sec-2.jpg";
import bgShadow from "/bg-shadow.png";
import arrow from "/arrow.png";
import printer from "/printer2.png";
import book from "/book.png";
import nib from "/nib.png";
import box from "/box (2).png";

const InquryForm = () => {
  return (
    <>
      <div
        className="inquiry-form-container py-20 mb-16"
        style={{
          background: "#00599c",
          // backgroundImage: `url(${formImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="main-container flex sm:flex-wrap justify-between gap-16">
          <div className="left-side w-1/2 sm:w-full ">
            <div className="form-title-bar">
              <h1 className="text-white text-3xl sm:text-[19px] sm:leading-7 sm:mb-8 mb-4">
                When you have{" "}
                <i className="font-serif text-[#FAC409]">
                  immediate box printing
                </i>{" "}
                need, we can typically turn your quote around in minutes.
              </h1>
            </div>
            <form>
              {/* First Row: Length, Width, Height */}
              <div className="flex flex-wrap -mx-2">
                <div className=" w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="length"
                  >
                    Length (inch)*
                  </label>
                  <input
                    id="length"
                    name="length"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Length"
                    required
                  />
                </div>
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="width"
                  >
                    Width (inch)*
                  </label>
                  <input
                    id="width"
                    name="width"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Width"
                    required
                  />
                </div>
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="height"
                  >
                    Height (inch)*
                  </label>
                  <input
                    id="height"
                    name="height"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Height"
                    required
                  />
                </div>
              </div>

              {/* Second Row: Stock Option, Print Option, Finishing Option */}
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="stockOption"
                  >
                    Stock Option
                  </label>
                  <input
                    id="stockOption"
                    name="stockOption"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Stock Option"
                  />
                </div>
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="printOption"
                  >
                    Print Option
                  </label>
                  <input
                    id="printOption"
                    name="printOption"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Print Option"
                  />
                </div>
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="finishingOption"
                  >
                    Finishing Option
                  </label>
                  <input
                    id="finishingOption"
                    name="finishingOption"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Finishing Option"
                  />
                </div>
              </div>

              {/* Third Row: Quantity, Full Name, Email */}
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="quantity"
                  >
                    Required Quantity*
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Quantity"
                    required
                  />
                </div>
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Full Name"
                  />
                </div>
                <div className="w-1/3 px-2 mb-4">
                  <label
                    className="block  text-white text-[12px] font- mb-2"
                    htmlFor="email"
                  >
                    Email Address*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // placeholder="Email Address"
                    required
                  />
                </div>
              </div>

              {/* Fourth Row: Job Details (Full Width) */}
              <div className="mb-6">
                <label
                  className="block  text-white text-[12px] font- mb-2"
                  htmlFor="jobDetails"
                >
                  Job Details
                </label>
                <textarea
                  id="jobDetails"
                  name="jobDetails"
                  rows="10"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  // placeholder="Job Details"
                ></textarea>
              </div>

              <div className="flex ">
                <Button
                  style={{
                    background: "#FAC409",
                    color: "#000",
                    padding: "6px 20px",
                  }}
                  endIcon={<FaAngleRight />}
                >
                  Request a Quote
                </Button>
                {/* <button

                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-600 transition duration-300"
                >
                  Submit
                </button> */}
              </div>
            </form>
          </div>
          <div className="right-side ">
            <div
              className="experties-image  relative"
              style={{
                // background: "#defffd",
                backgroundImage: `url(${bgShadow})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <img src={expertiesSecImg} alt="" className="rounded-xl" />
              <img
                src={expertiesSec2}
                alt=""
                className="ml-auto absolute right-0 top-[90%] rounded-xl sm:hidden"
              />
              <img
                src={arrow}
                alt=""
                className="absolute right-1/2 top-[96%] rotate-[-13deg] w-32 sm:hidden"
              />
              <img
                src={printer}
                alt=""
                className="absolute right-[15%] top-[10%]  w-16 sm:hidden"
              />
              <img
                src={book}
                alt=""
                className="absolute right-[0%] top-[50%]  w-16 sm:hidden"
              />
              <img
                src={nib}
                alt=""
                className="absolute left-[0%] bottom-[-20%]  w-16 sm:hidden"
              />
              <img
                src={box}
                alt=""
                className="absolute left-[30%] bottom-[-45%]  w-16 sm:hidden "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InquryForm;

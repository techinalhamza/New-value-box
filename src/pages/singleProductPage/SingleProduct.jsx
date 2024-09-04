import React from "react";
import "./SingleProduct.css";
import product from "/DiecutBoxes.png";
import { Rating } from "@mui/material";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function SingleProduct() {
  return (
    <>
      <div className="singleProduct-container">
        <div className="main-container">
          <div className="product-content flex gap-4 max-h-[40rem] overflow-hidden overflow-y-auto ">
            {/* Image Container */}
            <div className="product-image w-1/2 max-h-[35rem] shadow-xl sticky top-0">
              <img src={product} alt="" className="w-full h-auto" />
            </div>

            {/* Product Info Container */}
            <div className="prodluct-info w-1/2  ">
              <div className="product-name text-4xl font-bold">
                Box By Style
              </div>
              <Rating
                defaultValue={5}
                readOnly
                style={{
                  fontSize: "18px",
                }}
              />
              <div className="price mt-4 text-2xl">10$</div>
              <div className="short-desc my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur placeat culpa aliquam architecto, veniam quas ut
                maiores nesciunt facilis repellendus tempora praesentium,
                deleniti, tempore corrupti?
              </div>
              <div className="inquiry-form">
                <form>
                  {/* First Row: Length, Width, Height */}
                  <div className="flex flex-wrap -mx-2">
                    <div className=" w-1/3 px-2 mb-4">
                      <label
                        className="  text-white text-[12px] hidden mb-2"
                        htmlFor="length"
                      >
                        Length (inch)*
                      </label>
                      <input
                        id="length"
                        name="length"
                        type="text"
                        className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Length"
                        required
                      />
                    </div>
                    <div className="w-1/3 px-2 mb-4">
                      <label
                        className="  text-white text-[12px] hidden mb-2"
                        htmlFor="width"
                      >
                        Width (inch)*
                      </label>
                      <input
                        id="width"
                        name="width"
                        type="text"
                        className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Width"
                        required
                      />
                    </div>
                    <div className="w-1/3 px-2 mb-4">
                      <label
                        className="  text-white text-[12px] hidden mb-2"
                        htmlFor="height"
                      >
                        Height (inch)*
                      </label>
                      <input
                        id="height"
                        name="height"
                        type="text"
                        className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Height"
                        required
                      />
                    </div>
                  </div>

                  {/* Second Row: Stock Option, Print Option, Finishing Option */}
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-1/3 px-2 mb-4">
                      <label
                        className="  text-white text-[12px] hidden mb-2"
                        htmlFor="stockOption"
                      >
                        Stock Option
                      </label>
                      <input
                        id="stockOption"
                        name="stockOption"
                        type="text"
                        className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Stock Option"
                      />
                    </div>
                    <div className="w-1/3 px-2 mb-4">
                      <label
                        className="  text-white text-[12px] hidden mb-2"
                        htmlFor="printOption"
                      >
                        Print Option
                      </label>
                      <input
                        id="printOption"
                        name="printOption"
                        type="text"
                        className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Print Option"
                      />
                    </div>
                    <div className="w-1/3 px-2 mb-4">
                      <label
                        className="  text-white text-[12px] hidden mb-2"
                        htmlFor="finishingOption"
                      >
                        Finishing Option
                      </label>
                      <input
                        id="finishingOption"
                        name="finishingOption"
                        type="text"
                        className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Finishing Option"
                      />
                    </div>
                  </div>

                  {/* Third Row: Quantity, Full Name, Email */}
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-1/3 px-2 mb-4">
                      <label
                        className="  text-white text-[12px] hidden mb-2"
                        htmlFor="quantity"
                      >
                        Required Quantity*
                      </label>
                      <input
                        id="quantity"
                        name="quantity"
                        type="number"
                        className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Quantity"
                        required
                      />
                    </div>
                    <div className="w-1/3 px-2 mb-4">
                      <label
                        className="  text-white text-[12px] hidden mb-2"
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="w-1/3 px-2 mb-4">
                      <label
                        className="  text-white text-[12px] hidden mb-2"
                        htmlFor="email"
                      >
                        Email Address*
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className=" w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>

                  {/* Fourth Row: Job Details (Full Width) */}
                  <div className="mb-6">
                    <label
                      className="  text-white text-[12px] hidden mb-2"
                      htmlFor="jobDetails"
                    >
                      Job Details
                    </label>
                    <textarea
                      id="jobDetails"
                      name="jobDetails"
                      rows="10"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Job Details"
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
                      Get Price Quote
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
              <div className="category my-4">
                <b>Category:</b> box
              </div>
              <div className="social flex">
                <ul className="flex items-center gap-2">
                  <li>
                    <b>Follow us on:</b>
                  </li>
                  <li>
                    <Link>
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaTiktok />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FaWhatsapp />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="product-desc-tabs min-h-screen">
            <div className="tabs">Description</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
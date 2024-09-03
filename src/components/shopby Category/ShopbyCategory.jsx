import React from "react";
import catImg1 from "/sample-product.jpg";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";

function ShopbyCategory() {
  return (
    <>
      <div className="shop-by-category-container mb-12">
        <div className="main-container">
          <div className="category-title-bar flex justify-between">
            <h1 className="text-3xl text-[#075697]">
              Shop By
              <i className="font-serif text-[#FAC409]"> Category</i>
            </h1>
            <Button
              style={{
                background: "#075697",
                color: "#fff",
                padding: "6px 20px",
              }}
              endIcon={<FaAngleRight />}
            >
              See All Shop
            </Button>
          </div>
          <div
            className="category-content-container mt-8"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit , minmax(12rem , 1fr))",
            }}
          >
            <div className="category-info">
              <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                <img src={catImg1} alt="" />
              </div>
              <h1>Custom Cosmetic Boxes</h1>
              <div className="category-name"></div>
            </div>
            <div className="category-info">
              <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                <img src={catImg1} alt="" />
              </div>
              <h1>Custom Cosmetic Boxes</h1>
              <div className="category-name"></div>
            </div>
            <div className="category-info">
              <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                <img src={catImg1} alt="" />
              </div>
              <h1>Custom Cosmetic Boxes</h1>
              <div className="category-name"></div>
            </div>
            <div className="category-info">
              <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                <img src={catImg1} alt="" />
              </div>
              <h1>Custom Cosmetic Boxes</h1>
              <div className="category-name"></div>
            </div>
            <div className="category-info">
              <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                <img src={catImg1} alt="" />
              </div>
              <h1>Custom Cosmetic Boxes</h1>
              <div className="category-name"></div>
            </div>
            <div className="category-info">
              <div className="category-img border border-solid w-40 rounded-full overflow-hidden h-40 p-5">
                <img src={catImg1} alt="" />
              </div>
              <h1>Custom Cosmetic Boxes</h1>
              <div className="category-name"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopbyCategory;

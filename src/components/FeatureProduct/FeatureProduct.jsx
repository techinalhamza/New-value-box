import React, { useState } from "react";
import product1 from "/sample-product.jpg";
import { Button, Rating } from "@mui/material";
import productdata from "../Products";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function FeatureProduct() {
  const [products, setProducts] = useState(productdata);
  // console.log(products);

  return (
    <>
      <div className="product-contaoner my-16">
        <div className="main-container">
          <div className="product-title-bar flex justify-between items-center flex-wrap">
            <h1 className="text-3xl font-bold text-Blue">
              Feature Print
              <i className=" text-Yellow"> Products</i>
            </h1>
            <ul className="flex items-center gap-4 sm:gap-2 flex-wrap sm:mt-4">
              <li className="text-base sm:text-sm font-bold">
                <Link>Best Seller</Link>
              </li>
              <li>|</li>
              <li className="text-base sm:text-sm font-bold text-[#555]">
                <Link>New Arrival</Link>
              </li>
              <li>|</li>
              <li className="text-base sm:text-sm font-bold text-[#555]">
                <Link>Top Seller</Link>
              </li>
              <li className="sm:hidden">
                <Link>
                  <Button
                    style={{
                      background: "var(--blue)",
                      color: "#fff",
                      padding: "10px 20px",
                    }}
                    endIcon={<FaAngleRight />}
                  >
                    {" "}
                    Show All Products
                  </Button>
                </Link>
              </li>
            </ul>
            {/* <Button
              style={{
                background: "#075697",
                color: "#fff",
                padding: "10px 20px",
              }}
              endIcon={<FaAngleRight />}
            >
              {" "}
              Show All Products
            </Button> */}
          </div>
          <div
            className="all-product-container mt-12 "
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit , minmax(18rem , 1fr))",
              gridRowGap: "1rem",
              placeItems: "center",
            }}
          >
            {products.reverse().map((val) => {
              console.log(val.name);
              return (
                <>
                  <div className="product-card max-w-[18rem] sm:max-w-[100%] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between p-4">
                    <div className="product-image-bx w-full border-[14px] border-[#f5f5f5] rounded-lg">
                      <img
                        src={val.img}
                        alt=""
                        className="m-auto bg-[#f5f5f5]"
                      />
                    </div>
                    <div className="product-info ">
                      <h1 className="product-name font-bold my-4 text-xl">
                        {val.name}
                      </h1>
                      {/* <Rating
                        readOnly
                        defaultValue={4}
                        precision={0.5}
                        style={{ fontSize: "18px" }}
                      /> */}
                      <p className="text-[14px] font-light text-[#555]">
                        {val.desc.length > 80
                          ? val.desc.substr(0, 80) + "..."
                          : val.desc}
                      </p>
                      <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-4">
                        <Rating
                          readOnly
                          defaultValue={4}
                          precision={0.5}
                          style={{ fontSize: "18px" }}
                        />
                        <Button
                          style={{
                            background: "var(--blue)",
                            color: "#fff",
                            padding: "6px 20px",
                            // width: "100%",
                          }}
                        >
                          Buy Now
                        </Button>
                        {/* <span>15% discount</span> */}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureProduct;

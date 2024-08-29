import React from "react";
import product1 from "../../assets/sample-product.jpg";
import { Button } from "@mui/material";

function PopularProduct() {
  return (
    <>
      <div className="product-contaoner mb-8">
        <div className="main-container">
          <div className="product-title-bar">
            <h1 className="text-3xl ">Popular Print Products</h1>
          </div>
          <div
            className="all-product-container mt-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit , minmax(18rem , 1fr))",
              gridRowGap: "1rem",
            }}
          >
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
            <div className="product-card max-w-[18rem] w-full border border-[#e9e3e3] rounded-lg flex flex-col justify-between">
              <div className="product-image-bx w-full">
                <img src={product1} alt="" className="m-auto" />
              </div>
              <div className="product-info p-4">
                <h1 className="product-name font-bold">Coffee Cups</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit voluptatum iusto voluptatem?
                </p>
                <div className="product-btn flex items-center justify-between  text-[#FAC409] mt-8">
                  <Button
                    style={{
                      background: "#075697",
                      color: "#fff",
                      padding: "6px 20px",
                    }}
                  >
                    Buy Now
                  </Button>
                  <span>15% discount</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularProduct;

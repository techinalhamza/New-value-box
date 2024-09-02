import React from "react";
import "./Banners.css";
import banner03 from "/banner03.jpg";
import banner04 from "/banner06.jpg";
import banner05 from "/banner07.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";

function Banners() {
  return (
    <>
      <div className="banner-container my-16">
        <div className="main-container">
          <div className="banner-card-container flex h-[28rem] gap-4 ">
            <div
              className="banner-card w-1/2 bg-[#F8EFEA] rounded-lg p-8 flex items-cnter justify-bet  flex-col"
              style={{
                backgroundImage: `url(${banner05})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p>High-quality customized</p>
              <h1 className="text-5xl font-bold my-4">
                Personalized bag customization
              </h1>
              <ul className=" ">
                <li>
                  <FaCheckCircle />
                  <span>Free design</span>
                </li>
                <li>
                  <FaCheckCircle />
                  <span>Unlimited size</span>
                </li>
                <li>
                  <FaCheckCircle />
                  <span>Unlimited color</span>
                </li>
                <li>
                  <FaCheckCircle />
                  <span>Unlimited material</span>
                </li>
              </ul>
            </div>
            <div
              className="banner-card w-1/2 bg-[#E6F4FA] rounded-lg p-8 flex items-centr justify-bet flex-col"
              style={{
                backgroundImage: `url(${banner04})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <p>THE FULL PACKAGE</p>
              <h1 className="text-5xl font-bold my-4">
                Quick, easy & <br />
                affordable printing
              </h1>
              <p>
                We’re a multi-talented school that delivers a complete brand
                makeover. Packaging, brand guidelines, stationery, vehicles,
                logos, adverts…
              </p>
              <div className="">
                <Button
                  style={{
                    background: "var(--blue)",
                    color: "#fff",
                    fontWeight: "bold",
                    marginTop: "2rem",
                  }}
                  endIcon={<FaAngleRight />}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banners;

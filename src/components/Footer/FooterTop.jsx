import { Button } from "@mui/material";
import React from "react";

function FooterTop() {
  return (
    <>
      <div className="footer-top-container bg-zinc-800">
        <div className="main-container">
          <div className="footer-top-content flex justify-between">
            <div className="left w-1/2">
              <h1 className="text-white text-3xl">
                We collaborate with people and brands; lets build something
                great together.
              </h1>
            </div>
            <div className="newsletter">
              <input type="email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterTop;

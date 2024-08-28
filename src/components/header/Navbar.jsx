import React from "react";
import { NavLink } from "react-router-dom";
import { RiDiscountPercentFill } from "react-icons/ri";

function Navbar() {
  return (
    <>
      <nav className=" border-t border-gray-300 py-4">
        <div className="main-container flex items-center justify-between">
          <div className="nav-links">
            <ul className="flex gap-4">
              <li>
                <NavLink exact="true" to="/products">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to="/products">
                  Quote by style
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to="/products">
                  Upload your Art work
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to="/products">
                  free design services
                </NavLink>
              </li>
              <li>
                <NavLink exact="true" to="/products">
                  Sample request
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="discount flex items-center">
            <span className="text-pink-500 text-2xl mr-2">
              <RiDiscountPercentFill />
            </span>
            <p className="text-base">
              Get 10% off when you buy 2 custom products!
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

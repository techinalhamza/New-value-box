import React from "react";
import logo from "../../assets/logoo.png";
import { FaSearch } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <header className=" ">
        <div className="main-container flex items-center justify-between py-4">
          <div className="logo w-[20%}">
            <img src={logo} alt="" />
          </div>
          <div className="searchbar flex items-center  border border-gray-200 h-min rounded-full overflow-hidden w-[40%] px-6">
            <div className="search-btn">
              <FaSearch />
            </div>
            <input
              type="search"
              placeholder="search products...."
              className="p-3 border-none outline-none w-full"
            />
          </div>
          <div className="contact-details">
            <div className="nav-contact-info flex items-center gap-4">
              <div className="nav-phone flex items-center gap-4">
                <div className="phone-icon text-2xl font-light border border-gray-300 p-2.5 rounded-full text-black">
                  <BiPhoneCall />
                </div>
                <div className="nav-num">
                  <p className="text-[12px] text-center text-[#7A869A]">
                    Need Help?Call us
                  </p>
                  <p>(713) 893-4763</p>
                </div>
              </div>
              |
              <div className="nav-account flex items-center gap-4">
                <div className="user-icon text-2xl font-light  p-2.5 rounded-full text-black">
                  <CiUser />
                </div>
                <p>My Account</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
}

export default Header;

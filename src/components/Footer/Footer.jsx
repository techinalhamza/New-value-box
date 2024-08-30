import React from "react";
import "../../components/Footer/Footer.css";
import logo from "../../assets/logoo.png";
import { CiLocationOn } from "react-icons/ci";
import { FaHeadset } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";
import appstore from "../../assets/app-store.jpg";
import googlestore from "../../assets/google-store.jpg";
import payment from "../../assets/payment-method.png";
function Footer() {
  return (
    <>
      <div className="footer-container bg-zinc-800 mt-12">
        <div className="main-container">
          <div className="footer-content ">
            <div className="row footer-data ">
              <div className="footer-col mt-4  ">
                <div className="img">
                  <img src={logo} alt="" />
                </div>
                <div className="company-info mt-4 ">
                  <p className="text-[#999999]">
                    Awesome grocery store website template
                  </p>
                </div>
              </div>
              <div className="footer-col mt-4">
                <div className="hd ">Quick Links</div>
                <div className="links">
                  <ul>
                    <li>
                      <Link>Home</Link>
                    </li>
                    <li>
                      <Link>Shop</Link>
                    </li>
                    <li>
                      <Link>About us</Link>
                    </li>
                    <li>
                      <Link>Blogs</Link>
                    </li>
                    <li>
                      <Link>Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col mt-4">
                <div className="hd">Categories</div>
                <div className="links">
                  <ul>
                    <li>
                      <Link>About Us</Link>
                    </li>
                    <li>
                      <Link>Delivery Information</Link>
                    </li>
                    <li>
                      <Link>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link>Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link>Contact Us</Link>
                    </li>
                    <li>
                      <Link>Support Center</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col mt-4">
                <div className="hd">Social Links</div>
                <div className="links">
                  <ul>
                    <li>
                      <Link>Become a Vendor</Link>
                    </li>
                    <li>
                      <Link>Affiliate Program</Link>
                    </li>
                    <li>
                      <Link>Farm Business</Link>
                    </li>
                    <li>
                      <Link>Farm Careers</Link>
                    </li>
                    <li>
                      <Link>Our Suppliers</Link>
                    </li>
                    <li>
                      <Link>Accessibility</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col mt-4">
                <div className="text-white font-bold">Contact Us</div>
                <div className="links mt-4 text-[#999999]">
                  <h1>
                    <CiLocationOn />
                    <span>address:</span> 5171 W Campbell Ave undefined Kent,
                    Utah 53127 United States
                  </h1>

                  <h1>
                    <FaHeadset />
                    <span>Call Us:</span> (+91) - 540-025-124553
                  </h1>

                  <h1>
                    <BsSend />
                    <span>Email:</span> sale@Nest.com
                  </h1>
                </div>
              </div>
              {/* <div className="footer-col mt-4">
                <div className="hd">Install App</div>
                <div className="links mt-4">
                  <p>From App Store or Google Play</p>

                  <div className="row imgs my-4">
                    <div className="col-6 pr-0">
                      <img src={appstore} alt="" />
                    </div>
                    <div className="col-6 pl-0">
                      <img src={googlestore} alt="" />
                    </div>
                  </div>

                  <p>Secured Payment Gateways</p>
                  <div className="mt-4">
                    <img src={payment} alt="" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

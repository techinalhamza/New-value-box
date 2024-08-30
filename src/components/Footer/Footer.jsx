import React from "react";
import logo from "../../assets/logoo.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container bg-zinc-800 py-16">
        <div className="main-container ">
          <footer className=" text-white py-8 max-w-[1200px]">
            <div className="container mx-auto flex flex-wrap justify-between">
              {/* Column 1: Logo and Brand Intro */}
              <div className="w-full lg:w-[30%] mb-8 lg:mb-0">
                <img
                  src="/path-to-logo.png"
                  alt="Brand Logo"
                  className="mb-4"
                />
                <p className="text-sm">
                  Short introduction about the brand. Explain what the brand is
                  about and what services or products it offers.
                </p>
              </div>

              {/* Column 2: Sitemap */}
              <div className="w-full lg:w-[20%] mb-8 lg:mb-0">
                <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      Home
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      About Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      Services
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Categories */}
              <div className="w-full lg:w-[20%] mb-8 lg:mb-0">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      Category 1
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      Category 2
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      Category 3
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:text-gray-400">
                      Category 4
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4: Contact Details */}
              <div className="w-full lg:w-[30%]">
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="mb-2">123 Street Name, City, Country</p>
                <p className="mb-2">Email: contact@example.com</p>
                <p className="mb-2">Phone: +123 456 7890</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;

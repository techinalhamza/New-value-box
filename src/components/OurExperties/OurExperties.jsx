import React from "react";
import background from "/experties-bg.jpg";
import expertiesSecImg from "/experties-sec-image.jpg";
import expertiesSec2 from "/experties-sec-2.jpg";
import bgShadow from "/bg-shadow.png";
import arrow from "/experiter-arrow.png";
import banner from "/Burger-and-Chip-Boxes-removebg-preview.png";

function OurExperties() {
  return (
    <>
      <div
        className="our-experties-container pt-24 pb-32"
        style={{
          background: "#defffd",
          //   backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="main-container">
          <div className="experties-content flex  justify-center ">
            <div className="experties-info w-1/2">
              <p className="text-[#075697]">DESIGNED FOR BUSINESSES</p>
              <h1 className="text-[40px]">
                Not Sure What You Want? Our Experts Can Help
              </h1>
              <div
                className="expert-services mt-12"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit , minmax(40% , 1fr))",
                  gap: "1rem",
                }}
              >
                <div className="experties-cards ">
                  <div className="experties-icon  mb-4 bg-white w-20 h-20 flex items-center justify-center rounded-full">
                    {/* <SlSizeFullscreen style={{ margin: "20px auto" }} /> */}
                    {/* <img src={image2} alt="" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="28"
                      viewBox="0 0 30 28"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M13.3333 0.5H11.6667C5.22335 0.5 0 5.78864 0 12.3125V17.375C0 19.239 1.49238 20.75 3.33333 20.75H13.3333C18.8562 20.75 23.3333 16.2169 23.3333 10.625C23.3333 9.81033 23.2383 9.01812 23.0589 8.25914C22.0066 3.80848 18.0516 0.5 13.3333 0.5Z"
                        fill="#00CFBE"
                      ></path>
                      <path
                        d="M13.334 20.7501C18.8568 20.7501 23.334 16.217 23.334 10.6251C23.334 9.81047 23.2389 9.01826 23.0595 8.25928C27.1485 10.0956 30.0006 14.2419 30.0006 19.0626V24.1251C30.0006 25.9891 28.5083 27.5001 26.6673 27.5001H16.6673C12.3132 27.5001 8.60912 24.6827 7.23633 20.7501H13.334Z"
                        fill="#00CFBE"
                      ></path>
                    </svg>
                  </div>
                  <div className="experties-title font-bold">
                    Customer support
                  </div>
                  <div className="experties-desc">
                    Provide outstanding unlimited support to your packaging
                    project.
                  </div>
                </div>
                <div className="experties-cards ">
                  <div className="experties-icon   mb-4 bg-white w-20 h-20 flex items-center justify-center rounded-full">
                    {/* <SlSizeFullscreen style={{ margin: "20px auto" }} /> */}
                    {/* <img src={image2} alt="" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.58311 13.8943C7.1152 11.0564 9.59305 9 12.4803 9H23.5212C26.4085 9 28.8864 11.0564 29.4185 13.8943L31.6685 25.8943C32.3608 29.5867 29.5281 33 25.7712 33H10.2303C6.47351 33 3.64077 29.5868 4.33311 25.8943L6.58311 13.8943Z"
                        fill="#00CFBE"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.375 7.5C12.375 4.3934 14.8934 1.875 18 1.875C21.1066 1.875 23.625 4.3934 23.625 7.5V12C23.625 12.6213 23.1213 13.125 22.5 13.125C21.8787 13.125 21.375 12.6213 21.375 12V7.5C21.375 5.63604 19.864 4.125 18 4.125C16.136 4.125 14.625 5.63604 14.625 7.5V12C14.625 12.6213 14.1213 13.125 13.5 13.125C12.8787 13.125 12.375 12.6213 12.375 12V7.5Z"
                        fill="#00CFBE"
                      ></path>
                    </svg>
                  </div>
                  <div className="experties-title font-bold">
                    End to end solution
                  </div>
                  <div className="experties-desc">
                    Get dedicated support from start to finish and even beyond
                  </div>
                </div>
                <div className="experties-cards ">
                  <div className="experties-icon  mb-4 bg-white w-20 h-20 flex items-center justify-center rounded-full">
                    {/* <SlSizeFullscreen style={{ margin: "20px auto" }} /> */}
                    {/* <img src={image2} alt="" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <circle
                        opacity="0.4"
                        cx="18"
                        cy="18"
                        r="15"
                        fill="#00CFBE"
                      ></circle>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.3349 12.1074C14.5777 10.7131 14.9027 9.45993 15.289 8.3976C15.7289 7.18795 16.23 6.2764 16.7383 5.68515C17.2493 5.09081 17.6789 4.91489 18 4.91489C18.321 4.91489 18.7506 5.09081 19.2616 5.68515C19.7699 6.2764 20.271 7.18795 20.7109 8.3976C21.0972 9.45993 21.4222 10.7131 21.665 12.1074C20.4906 11.9953 19.2622 11.9361 18 11.9361C16.7377 11.9361 15.5093 11.9953 14.3349 12.1074ZM12.3539 12.3539C12.6206 10.6321 13.007 9.06981 13.4894 7.7432C13.9736 6.41166 14.5728 5.26673 15.2863 4.43679C15.9972 3.60996 16.9109 3 18 3C19.089 3 20.0027 3.60996 20.7136 4.43679C21.4271 5.26673 22.0263 6.41166 22.5105 7.7432C22.9929 9.06981 23.3793 10.6321 23.646 12.3539C25.3678 12.6206 26.9301 13.007 28.2567 13.4894C29.5883 13.9736 30.7332 14.5728 31.5631 15.2863C32.39 15.9972 32.9999 16.9109 32.9999 18C32.9999 19.089 32.39 20.0028 31.5631 20.7136C30.7332 21.4271 29.5883 22.0263 28.2567 22.5105C26.9301 22.9929 25.3678 23.3793 23.646 23.646C23.3793 25.3678 22.9929 26.9301 22.5105 28.2567C22.0263 29.5883 21.4271 30.7332 20.7136 31.5631C20.0027 32.39 19.089 32.9999 18 32.9999C16.9109 32.9999 15.9972 32.39 15.2863 31.5631C14.5728 30.7332 13.9736 29.5883 13.4894 28.2567C13.007 26.9301 12.6206 25.3678 12.3539 23.646C10.6321 23.3793 9.06981 22.9929 7.7432 22.5105C6.41166 22.0263 5.26673 21.4271 4.43679 20.7136C3.60996 20.0027 3 19.089 3 18C3 16.9109 3.60996 15.9972 4.43679 15.2863C5.26673 14.5728 6.41166 13.9736 7.7432 13.4894C9.06981 13.007 10.6321 12.6206 12.3539 12.3539ZM12.1074 21.665C10.7131 21.4222 9.45993 21.0972 8.3976 20.7109C7.18795 20.271 6.27639 19.7699 5.68515 19.2616C5.09081 18.7506 4.91489 18.321 4.91489 18C4.91489 17.6789 5.09081 17.2493 5.68515 16.7383C6.27639 16.23 7.18795 15.7289 8.3976 15.289C9.45993 14.9027 10.7131 14.5777 12.1074 14.3349C11.9953 15.5093 11.9361 16.7377 11.9361 18C11.9361 19.2622 11.9953 20.4906 12.1074 21.665ZM14.0603 21.9397C13.9247 20.6975 13.851 19.3751 13.851 18C13.851 16.6248 13.9247 15.3024 14.0603 14.0603C15.3024 13.9247 16.6248 13.851 18 13.851C19.3751 13.851 20.6975 13.9247 21.9397 14.0603C22.0753 15.3024 22.1489 16.6248 22.1489 18C22.1489 19.3751 22.0753 20.6975 21.9397 21.9397C20.6975 22.0753 19.3751 22.1489 18 22.1489C16.6248 22.1489 15.3024 22.0753 14.0603 21.9397ZM14.3349 23.8926C14.5777 25.2868 14.9027 26.54 15.289 27.6023C15.7289 28.812 16.23 29.7235 16.7383 30.3148C17.2493 30.9091 17.6789 31.085 18 31.085C18.321 31.085 18.7506 30.9091 19.2616 30.3148C19.7699 29.7235 20.271 28.812 20.7109 27.6023C21.0972 26.54 21.4222 25.2868 21.665 23.8926C20.4906 24.0046 19.2622 24.0638 18 24.0638C16.7377 24.0638 15.5093 24.0046 14.3349 23.8926ZM23.8926 21.665C25.2868 21.4222 26.54 21.0972 27.6023 20.7109C28.812 20.271 29.7235 19.7699 30.3148 19.2616C30.9091 18.7506 31.085 18.321 31.085 18C31.085 17.6789 30.9091 17.2493 30.3148 16.7383C29.7235 16.23 28.812 15.7289 27.6023 15.289C26.54 14.9027 25.2868 14.5777 23.8926 14.3349C24.0046 15.5093 24.0638 16.7377 24.0638 18C24.0638 19.2622 24.0046 20.4906 23.8926 21.665Z"
                        fill="#00CFBE"
                      ></path>
                    </svg>
                  </div>
                  <div className="experties-title font-bold">
                    Custom Materials
                  </div>
                  <div className="experties-desc">
                    Our packaging experts are able to help turn your idea to
                    reality.
                  </div>
                </div>
                <div className="experties-cards ">
                  <div className="experties-icon  mb-4 bg-white w-20 h-20 flex items-center justify-center rounded-full">
                    {/* <SlSizeFullscreen style={{ margin: "20px auto" }} /> */}
                    {/* <img src={image2} alt="" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18 6.28077C16.733 4.30743 14.5192 3 12 3C9.72183 3 7.875 4.84683 7.875 7.125C7.875 9.40317 9.72183 11.25 12 11.25H18H24C26.2782 11.25 28.125 9.40317 28.125 7.125C28.125 4.84683 26.2782 3 24 3C21.4808 3 19.267 4.30743 18 6.28077ZM12 9H16.7446C16.2367 6.84997 14.3052 5.25 12 5.25C10.9645 5.25 10.125 6.08947 10.125 7.125C10.125 8.16053 10.9645 9 12 9ZM24 9H19.2554C19.7633 6.84997 21.6948 5.25 24 5.25C25.0355 5.25 25.875 6.08947 25.875 7.125C25.875 8.16053 25.0355 9 24 9Z"
                        fill="#00CFBE"
                      ></path>
                      <path
                        d="M3 12C3 10.3431 4.34315 9 6 9H30C31.6569 9 33 10.3431 33 12V15C33 16.6569 31.6569 18 30 18H6C4.34315 18 3 16.6569 3 15V12Z"
                        fill="#00CFBE"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M6 18H30V31C30 32.1046 29.1046 33 28 33H8C6.89543 33 6 32.1046 6 31V18Z"
                        fill="#00CFBE"
                      ></path>
                    </svg>
                  </div>
                  <div className="experties-title font-bold">
                    High quality guaranteed
                  </div>
                  <div className="experties-desc">
                    Enjoy the perks of our proactive cost savings solutions
                  </div>
                </div>
              </div>
            </div>
            <div
              className="experties-image w-1/2 relative ml-16"
              style={{
                // background: "#defffd",
                backgroundImage: `url(${bgShadow})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              {/* <img src={expertiesSecImg} alt="" className="rounded-xl" />
              <img
                src={expertiesSec2}
                alt=""
                className="ml-auto absolute right-0 top-[60%] rounded-xl"
              />
              <img src={arrow} alt="" className="absolute right-1/2 " /> */}
              <img src={banner} alt="" className="w-[40rem]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurExperties;

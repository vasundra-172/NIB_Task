import React from "react";

const LOGOS = [
  <img
    width="80%"
    height="100%"
    className="object-cover"
    key="1"
    src="https://www.notioninsurance.com/images/brand-images/partner-img1.jpeg"
    alt="company1"
  />,
  <img
    width="80%"
    height="100%"
    key="2"
    className="object-cover"
    src="https://www.notioninsurance.com/images/brand-images/partner-img2.jpeg"
    alt="company2"
  />,
  <img
    width="80%"
    height="100%"
    key="3"
    className="object-cover"
    src="https://www.notioninsurance.com/images/brand-images/partner-img3.jpeg"
    alt="company3"
  />,
  <img
    width="80%"
    height="100%"
    key="4"
    className="object-cover"
    src="https://www.notioninsurance.com/images/brand-images/partner-img4.jpeg"
    alt="company4"
  />,
  <img
    width="80%"
    height="100%"
    key="5"
    className="object-cover"
    src="https://www.notioninsurance.com/images/brand-images/partner-img5.jpeg"
    alt="company5"
  />,
  <img
    width="80%"
    height="100%"
    key="6"
    className="object-cover"
    src="https://www.notioninsurance.com/images/brand-images/partner-img6.jpeg"
    alt="company6"
  />,
  <img
    width="80%"
    height="100%"
    key="7"
    className="object-cover"
    src="https://www.notioninsurance.com/images/brand-images/partner-img7.jpeg"
    alt="company7"
  />,
  <img
    width="80%"
    height="100%"
    key="8"
    className="object-cover"
    src="https://www.notioninsurance.com/images/brand-images/partner-img8.jpeg"
    alt="company8"
  />,
  <img
    width="80%"
    height="100%"
    key="9"
    className="object-cover"
    src="https://www.notioninsurance.com/images/brand-images/partner-img9.jpeg"
    alt="company9"
  />,
  <img
    width="80%"
    height="100%"
    key="10"
    className="object-cover"
    src="https://www.notioninsurance.com/images/brand-images/partner-img10.jpeg"
    alt="company10"
  />,
];

const Partners = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-[10rem] h-[6rem] lg:h-[8rem] bg-[#96d2f5] flex items-center justify-center">
        <p className="text-xl text-white font-semibold rounded-md max-w-max">
          Our Partners
        </p>
      </div>
      <div className="relative m-auto w-screen h-[6rem] lg:h-[8rem] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#96d2f5_0%,rgba(255,255,255,0)_20%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#96d2f5_0%,rgba(255,255,255,0)_20%)] after:content-['']">
        <div className="animate-infinite-slider flex h-full w-[calc(450px*10)]">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[130px] lg:w-[200px] h-full object-cover items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[130px] lg:w-[200px] h-full object-cover items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
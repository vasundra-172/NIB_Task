import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const Insurance = () => {
  const otherInsuranceItems = [
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/life-insur.jpg",
      text: "Life Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/health-insur.jpg",
      text: "Health Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/investment-insur.jpg",
      text: "Investment Plans",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/home.jpg",
      text: "Home Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/marine.jpg",
      text: "Marine Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/taxi.png",
      text: "Taxi Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/child-insur.jpg",
      text: "Child Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/money-insur.svg",
      text: "Money Back Plan",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/employee-health-insur.avif",
      text: "Employee Health Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/shop-owner.png",
      text: "Shop Owner Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/worker.png",
      text: "Worker Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/general-liability.jpg",
      text: "General Liability Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/Travel-insur.jpg",
      text: "Travel Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/burning-building.png",
      text: "Fire & Burglary Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/cyber.png",
      text: "Cyber Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/contractor-risk.PNG",
      text: "Contractor Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/profesional-idem.png",
      text: "Professional Indemnity",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/profesional-idem2.png",
      text: "Professional Indemnity 2",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/contractor-risk.png",
      text: "Contractor Risk",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/directors.png",
      text: "Directors & Officers Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/pension.jpg",
      text: "Pension Life Plan",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/cancer-ribbon.png",
      text: "Cancer Health Plan",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/ULIP.jpg",
      text: "ULIP Insurance",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/critical.jpg",
      text: "Critical Care Health Plan",
    },
    {
      image:
        "https://www.notioninsurance.com/images/other-insur-images/onecr.jpg",
      text: "1st Health Cover Plan",
    },
  ];

  const groupedItems = [];
  for (let i = 0; i < otherInsuranceItems.length; i += 8) {
    groupedItems.push(otherInsuranceItems.slice(i, i + 8));
  }

  return (
    <div id="insurance" className="text-center px-6">
      <h2 className="text-3xl font-bold mt-2">Other Insurance</h2>
      <hr className="mt-4 -mb-5" />
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="mt-6 px-6 py-10 w-[90%] mx-auto"
      >
        {groupedItems.map((group, groupIndex) => (
          <SwiperSlide key={groupIndex}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {group.map((item, index) => (
                <div
                  key={index}
                  className="p-6 w-full h-[170px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-between 
                transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={item.image}
                    alt={item.text}
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-sm text-center flex-grow">{item.text}</p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Insurance;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Insurance = () => {
  return (
    <div id="insurance" className="text-center py-10 px-6">
     <div className="row my-lg-5 d-flex flex-wrap justify-content-center gap-4 mt-4">
  {/* Motor Insurance */}
  <div className="col-lg-4 p-4 bg-white shadow-lg rounded-md">
    <h5 className="font-bold text-center">Motor Insurance</h5>
    <div className="flex justify-content-around">
      <div className="text-center">
        <img className="icon" src="https://www.notioninsurance.com/images/car-product.jpg" alt="Car Insurance" />
        <p>Car Insurance</p>
      </div>
      <div className="text-center">
        <img className="icon" src="https://www.notioninsurance.com/images/bike-product.jpg" alt="2 Wheeler Insurance" />
        <p>2 Wheeler Insurance</p>
      </div>
      <div className="text-center">
        <img className="icon" src="https://www.notioninsurance.com/images/csv-product.jpg" alt="Commercial Vehicle" />
        <p>Commercial Vehicle</p>
      </div>
    </div>
  </div>

  {/* Life Insurance */}
  <div className="col-lg-3 p-4 bg-white shadow-lg rounded-md">
    <h5 className="font-bold text-center">Life Insurance</h5>
    <div className="flex justify-content-around">
      <div className="text-center">
        <img className="icon" src="https://www.notioninsurance.com/images/termlife-product.jpg" alt="Term Insurance" />
        <p>Term Insurance</p>
      </div>
      <div className="text-center">
        <img className="icon" src="https://www.notioninsurance.com/images/endowment-product.jpg" alt="Endowment Plan" />
        <p>Endowment Plan</p>
      </div>
    </div>
  </div>

  {/* Health Insurance */}
  <div className="col-lg-4 p-4 bg-white shadow-lg rounded-md">
    <h5 className="font-bold text-center">Health Insurance</h5>
    <div className="flex justify-content-around">
      <div className="text-center">
        <img className="icon" src="https://www.notioninsurance.com/images/wholelife-product.jpg" alt="Individual Health Insurance" />
        <p>Individual Health Insurance</p>
      </div>
      <div className="text-center">
        <img className="icon" src="https://www.notioninsurance.com/images/family2-product.jpg" alt="Family Health Insurance" />
        <p>Family Health Insurance</p>
      </div>
      <div className="text-center">
        <img className="icon" src="https://www.notioninsurance.com/images/seniorcitizen-product.jpg" alt="Senior Citizen Plan" />
        <p>Senior Citizen Plan</p>
      </div>
    </div>
  </div>
</div>


      <h2 className="text-3xl font-bold mt-12">Other Insurance</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mt-6 w-[90%] mx-auto"
      >
        <SwiperSlide className="p-6 bg-white shadow-lg rounded-md">
          🏠 Home Insurance
        </SwiperSlide>
        <SwiperSlide className="p-6 bg-white shadow-lg rounded-md">
          ⚓ Marine Insurance
        </SwiperSlide>
        <SwiperSlide className="p-6 bg-white shadow-lg rounded-md">
          🚖 Taxi Insurance
        </SwiperSlide>
        <SwiperSlide className="p-6 bg-white shadow-lg rounded-md">
          💼 Business Insurance
        </SwiperSlide>
        <SwiperSlide className="p-6 bg-white shadow-lg rounded-md">
          💰 Investment Plans
        </SwiperSlide>
        <SwiperSlide className="p-6 bg-white shadow-lg rounded-md">
          🔒 Cyber Insurance
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Insurance;

import React from "react";
import OtherInsurance from "./OtherInsurance"

const Insurance = () => {
  return (
    <div id="insurance" className="text-center py-8 px-6">
      <div className="row my-lg-5 d-flex flex-wrap justify-content-center gap-4 mt-6">
        {/* Motor Insurance */}
        <div className="col-lg-4 p-4 bg-white shadow-lg rounded-md">
          <h5 className="font-bold text-center mb-2">Motor Insurance</h5>
          <div className="flex justify-content-around">
            <div className="text-center border-r border-gray-300 pr-4 flex flex-col items-center">
              <img className="icon" src="https://www.notioninsurance.com/images/car-product.jpg" alt="Car Insurance" />
              <p>Car Insurance</p>
            </div>
            <div className="text-center border-r border-gray-300 px-4 flex flex-col items-center">
              <img className="icon" src="https://www.notioninsurance.com/images/bike-product.jpg" alt="2 Wheeler Insurance" />
              <p>2 Wheeler Insurance</p>
            </div>
            <div className="text-center pl-4 flex flex-col items-center">
              <img className="icon" src="https://www.notioninsurance.com/images/csv-product.jpg" alt="Commercial Vehicle" />
              <p>Commercial Vehicle</p>
            </div>
          </div>
        </div>

        {/* Life Insurance */}
        <div className="col-lg-3 p-4 bg-white shadow-lg rounded-md">
          <h5 className="font-bold text-center mb-2">Life Insurance</h5>
          <div className="flex justify-content-around">
            <div className="text-center border-r border-gray-300 pr-4 flex flex-col items-center">
              <img className="icon" src="https://www.notioninsurance.com/images/termlife-product.jpg" alt="Term Insurance" />
              <p>Term Insurance</p>
            </div>
            <div className="text-center pl-4 flex flex-col items-center">
              <img className="icon" src="https://www.notioninsurance.com/images/endowment-product.jpg" alt="Endowment Plan" />
              <p>Endowment Plan</p>
            </div>
          </div>
        </div>

        {/* Health Insurance */}
        <div className="col-lg-4 p-4 bg-white shadow-lg rounded-md">
          <h5 className="font-bold text-center mb-2">Health Insurance</h5>
          <div className="flex justify-content-around">
            <div className="text-center border-r border-gray-300 pr-4 flex flex-col items-center">
              <img className="icon" src="https://www.notioninsurance.com/images/wholelife-product.jpg" alt="Individual Health Insurance" />
              <p>Individual Health Insurance</p>
            </div>
            <div className="text-center border-r border-gray-300 px-4 flex flex-col items-center">
              <img className="icon" src="https://www.notioninsurance.com/images/family2-product.jpg" alt="Family Health Insurance" />
              <p>Family Health Insurance</p>
            </div>
            <div className="text-center pl-4 flex flex-col items-center">
              <img className="icon" src="https://www.notioninsurance.com/images/seniorcitizen-product.jpg" alt="Senior Citizen Plan" />
              <p>Senior Citizen Plan</p>
            </div>
          </div>
        </div>
      </div>


{/* Other Insurance Slider */}
<OtherInsurance/>
    </div>
  );
};

export default Insurance;

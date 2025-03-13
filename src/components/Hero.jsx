import React from "react";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 mt-6 flex items-center">
      <div className="w-1/2 pr-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          Buy Insurance,
        </h1>
        <h2 className="text-4xl font-semibold text-orange-500 mb-8">
          Simple and Easy
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          We are a professional organization with a dedicated team of qualified
          insurance professionals, committed to meeting the diverse insurance
          and risk management needs of clients nationwide. Our team specializes
          in providing customized solutions for individuals and businesses
          across various sectors, including life, health, home, and business
          insurance.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          We understand that every client has unique requirements, and we work
          closely with them to identify the best strategies to mitigate risks
          and protect their assets. With a focus on integrity, transparency, and
          customer satisfaction, we offer expert guidance and support, ensuring
          that our clients receive comprehensive coverage tailored to their
          specific needs.
        </p>
      </div>
      <div className="w-1/2 relative">
        <div className="w-full max-w-lg mx-auto ml-10 relative aspect-square rounded-full overflow-hidden border-8 border-blue-600">
          <img
            src="https://www.notioninsurance.com/images/hero-banner.jpg"
            alt="Happy Family"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600/20"></div>
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-6 rounded-full hover:bg-blue-700 transition">
            <Play className="w-12 h-12 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

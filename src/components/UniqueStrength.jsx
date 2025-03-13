import React from "react";

const strengths = [
  {
    image: "https://www.notioninsurance.com/images/feature-claim.jpg",
    title: "Claims Assistance",
    description: "Easy & Reliable",
  },
  {
    image: "https://www.notioninsurance.com/images/feature-security.jpeg",
    title: "Data Security",
    description: "Guaranteed",
  },
  {
    image: "https://www.notioninsurance.com/images/feature-best.jpeg",
    title: "Best Prices",
    description: "in the market",
  },
  {
    image: "https://www.notioninsurance.com/images/feature-service24.jpeg",
    title: "24/7 Support",
    description: "Every day of the week",
  },
];

const UniqueStrengths = () => {
  return (
    <div className="py-10 px-6 strength mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Our Unique Strengths</h2>
      <p className="text-center text-gray-600 mb-12">
        Experience excellence with our tailored solutions and commitment to customer satisfaction.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {strengths.map((strength, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg hero-feature-box text-center transform transition-transform duration-300 hover:scale-105 flex flex-col items-center"
            style={{ width: "250px" }}
          >
            <img
              src={strength.image}
              alt={strength.title}
              className="w-100 mb-4"
              style={index === 3 ? { height: "10rem"} : {}} // Adjust size for the 4th card
            />
            <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
            <p className="text-gray-600">{strength.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniqueStrengths;
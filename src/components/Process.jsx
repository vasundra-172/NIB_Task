import { useState } from "react";

const steps = [
  { id: 1, text: "Select insurance", img: "https://www.notioninsurance.com/images/select-insur.png" },
  { id: 2, text: "Schedule meeting", img: "https://www.notioninsurance.com/images/schedule-meet.png" },
  { id: 3, text: "Meet agent", img: "https://www.notioninsurance.com/images/meet-agent.png" },
  { id: 4, text: "Get insurance", img: "https://www.notioninsurance.com/images/get-insur.png" }
];

const WorkProcess = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-col items-center mt-16">
      <h2 className="text-3xl font-bold mb-2">Our Easy Work Process in 4 Steps</h2>
      <p className="mb-12">Work process</p>
      
      <div className="flex items-center justify-center space-x-16 relative">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex flex-col items-center">
            {/* Step Circle with Icon */}
            <div
              className={`w-48 h-48 flex gap-10 justify-center items-center rounded-full shadow-xl transition-transform duration-300 ${
                hovered === step.id ? "scale-110 z-10" : "scale-100"
              } bg-white`}
              onMouseEnter={() => setHovered(step.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={step.img} alt={step.text} className="w-16 h-16" />
            </div>

            {/* Step Number */}
            <span
              className={`z-10 absolute -top-0 -left-0 w-12 h-12 flex justify-center items-center rounded-full text-white font-bold text-lg transition-all duration-300 ${
                hovered === step.id ? "bg-yellow-500" : "bg-blue-500"
              }`}
            >
              {step.id}
            </span>

            {/* Step Title */}
            <p className="mt-4 text-xl font-semibold">{step.text}</p>

            {/* Connector Line */}
            {index !== steps.length - 1 && (
              <div
                className={`absolute top-1/2 left-full h-1 w-20 transition-all duration-300 ${
                  hovered === step.id ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;

import React from "react";
import { ArrowRight } from "lucide-react"; // Assuming you have lucide-react for the arrow icon

const NotSureSection = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2 lg:w-2/5 mb-12 md:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Still not sure what you are looking for?
          </h2>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50">
            Talk to Our Experts
            <ArrowRight className="ml-3 w-5 h-5" />
          </button>
        </div>

        {/* Right Image (Desktop/Tablet View) */}
        <div className="md:w-1/2 lg:w-3/5 flex justify-center md:justify-end relative">
          {/* Main Screenshot Image */}
          <img
            src="https://framerusercontent.com/images/a5WlU9l2KzG4M0WvD6k27Qd74.png" // Replace with your actual image URL or import if local
            alt="High Quality Digital Services"
            className="w-full max-w-xl md:max-w-none md:w-[700px] lg:w-[900px] xl:w-[1000px] h-auto object-contain"
          />

          {/* Abstract background elements (example positioning, adjust as needed) */}
          {/* Top Right Lines */}
          <div className="absolute top-0 right-0 w-20 h-10 md:w-24 md:h-12 lg:w-28 lg:h-14 xl:w-32 xl:h-16 flex flex-col justify-between -mr-8 -mt-8 md:-mr-12 md:-mt-12 lg:-mr-16 lg:-mt-16 xl:-mr-20 xl:-mt-20">
            <span className="block w-full h-1 bg-gray-700 rounded-full"></span>
            <span className="block w-4/5 h-1 bg-gray-700 rounded-full"></span>
            <span className="block w-3/5 h-1 bg-gray-700 rounded-full"></span>
          </div>
          {/* Mid Right Lines */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-20 h-10 md:w-24 md:h-12 lg:w-28 lg:h-14 xl:w-32 xl:h-16 flex flex-col justify-between -mr-8 md:-mr-12 lg:-mr-16 xl:-mr-20">
            <span className="block w-full h-1 bg-gray-700 rounded-full"></span>
            <span className="block w-4/5 h-1 bg-gray-700 rounded-full"></span>
            <span className="block w-3/5 h-1 bg-gray-700 rounded-full"></span>
          </div>
          {/* Bottom Right Lines */}
          <div className="absolute bottom-0 right-0 w-20 h-10 md:w-24 md:h-12 lg:w-28 lg:h-14 xl:w-32 xl:h-16 flex flex-col justify-between -mr-8 mb-8 md:-mr-12 md:mb-12 lg:-mr-16 lg:mb-16 xl:-mr-20 xl:mb-20">
            <span className="block w-full h-1 bg-gray-700 rounded-full"></span>
            <span className="block w-4/5 h-1 bg-gray-700 rounded-full"></span>
            <span className="block w-3/5 h-1 bg-gray-700 rounded-full"></span>
          </div>
          {/* Left Lines (closer to content) */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-20 h-10 md:w-24 md:h-12 lg:w-28 lg:h-14 xl:w-32 xl:h-16 flex flex-col justify-between mt-12 md:mt-16">
            <span className="block w-full h-1 bg-gray-700 rounded-full"></span>
            <span className="block w-4/5 h-1 bg-gray-700 rounded-full"></span>
            <span className="block w-3/5 h-1 bg-gray-700 rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Abstract Background Shapes (Orange) */}
      <div className="absolute bottom-0 left-0 w-full h-3/5 md:h-1/2 bg-gradient-to-t from-orange-600 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600 to-transparent opacity-20"></div>
    </section>
  );
};

export default NotSureSection;

import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">Vinal Munasinghe</span>
            <span role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
            Fullstack Developer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            I transform ideas into engaging, user-focused websites and
            applications.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg"
            >
              Contact Me
            </button>
            <button
              onClick={() => {
                document
                  .getElementById("work")
                  .scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-full transition duration-300"
            >
              See My Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

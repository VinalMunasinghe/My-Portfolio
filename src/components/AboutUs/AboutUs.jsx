import React from "react";

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <div className="rounded-lg bg-gray-100 p-2 shadow-lg">
              <div className="bg-gray-300 h-64 w-full md:h-80 rounded overflow-hidden">
                <img
                  src="public/assets/images/Profilepic.jpg"
                  alt="Your Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Who I Am</h3>
            <p className="text-gray-600 mb-4">
              I am a dedicated and passionate Associate Software Engineer with 2
              years of experience in developing modern web applications. My
              journey in technology began during my college years, and since
              then, I have continuously honed my skills to stay at the forefront
              of the field.
            </p>
            <p className="text-gray-600 mb-6">
              Specializing in frontend development with React, I also possess a
              solid full-stack background, with experience in backend
              technologies such as Java, Spring Boot, and working with various
              databases like Oracle, MySQL, and MongoDB. My goal is to create
              clean, efficient, and user-friendly web applications that provide
              practical solutions to real-world challenges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-bold text-gray-800">Name:</h4>
                <p className="text-gray-600">Vinal Munasinghe</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Email:</h4>
                <p className="text-gray-600">vinalmunasinghe@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Location:</h4>
                <p className="text-gray-600">Colombo, Sri Lanka</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Phone:</h4>
                <p className="text-gray-600">+(94) 776-765-490</p>
              </div>
            </div>

            <a href="public/assets/cv/VinalMunasinghe.pdf" download>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 shadow-md hover:shadow-lg flex items-center">
                <span>Download Resume</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

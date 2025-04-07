import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Food Review Web Application",
      category: "web",
      image: "src/assets/images/FRW.png",
      link: "https://github.com/VinalMunasinghe/Food-Review-Web-Application",
      description:
        "A user-friendly web application that allows users to rate dishes, leave detailed reviews for restaurants, and engage with others through likes and comments. Designed to enhance the dining experience through community-driven feedback.",
    },
    {
      id: 2,
      title: "Fitty App",
      category: "app",
      image: "src/assets/images/Fitty.png",
      link: "https://github.com/VinalMunasinghe/FittyApp",
      description:
        "A fitness tracking app that helps users monitor daily movements, log workouts, set fitness goals, and track progress over time. With an intuitive interface and real-time insights, Fitty empowers users to stay motivated and lead a healthier lifestyle.",
    },
    {
      id: 3,
      title: "Eco Vision Web Application",
      category: "web",
      image: "src/assets/images/EcoVision.png",
      link: "https://github.com/VinalMunasinghe/Eco-vision-web",
      description:
        "A real-time web application developed for our research on IoT-based solutions to monitor and mitigate industrial air pollution. EcoVision visualizes live sensor data, tracks emission levels, and provides insights to support environmental sustainability.",
    },
    {
      id: 4,
      title: "Hotel Management System",
      category: "web",
      image: "src/assets/images/HMS.png",
      link: "https://github.com/Laksara-007/ITP24_B4_W07",
      description:
        "A web-based system developed for Heritage Resort to automate their manual operations, streamlining booking, billing, and room management for improved efficiency.",
    },
    {
      id: 5,
      title: "Vehicle Renting System UI",
      category: "design",
      image: "src/assets/images/VRS.png",
      description:
        "A clean and modern website UI design for a vehicle renting system, focused on enhancing user experience with intuitive navigation and responsive layouts for easy booking and vehicle management.",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "app", label: "App Development" },
    { id: "design", label: "UI/UX Design" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">My Recent Work</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Feel free to explore and learn
            more about each one.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                } transition duration-300 border border-gray-200`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-3 py-1 rounded-full uppercase">
                    {project.category === "web"
                      ? "Web Development"
                      : project.category === "app"
                      ? "App Development"
                      : "UI/UX Design"}
                  </span>
                  {/* <button className="text-blue-600 hover:text-blue-800 font-medium transition duration-300">
                    View Details
                  </button> */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium transition duration-300"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

import React from "react";

const Skills = () => {
  const skillsData = [
    { name: "Java", icon: "/assets/icons/Java.svg" },
    { name: "Spring Boot", icon: "/assets/icons/Spring.svg" },
    { name: "JavaScript", icon: "/assets/icons/JavaScript.svg" },
    { name: "TypeScript", icon: "/assets/icons/TypeScript.svg" },
    { name: "React", icon: "/assets/icons/React.svg" },
    { name: "Angular", icon: "/assets/icons/Angular.svg" },
    { name: "Redux", icon: "/assets/icons/redux.svg" },
    { name: "HTML", icon: "/assets/icons/html5.svg" },
    { name: "CSS", icon: "/assets/icons/css.svg" },
    { name: "SASS", icon: "/assets/icons/sass.svg" },
    { name: "Tailwind CSS ", icon: "/assets/icons/Tailwind.svg" },
    { name: "Oracle ", icon: "/assets/icons/Oracle.svg" },
    { name: "MySQL ", icon: "/assets/icons/MySql.svg" },
    { name: "MongoDB ", icon: "/assets/icons/MongoDB.svg" },
    { name: "Git ", icon: "/assets/icons/Git.svg" },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-pink-50 rounded-full p-6 mb-3 w-24 h-24 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className="w-12 h-12"
                />
              </div>
              <span className="text-gray-600">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

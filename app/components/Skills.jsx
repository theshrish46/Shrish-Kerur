import React from "react";

const skills = [
  { name: "React", badgeUrl: "https://img.shields.io/badge/-React-blue" },
  { name: "Node.js", badgeUrl: "https://img.shields.io/badge/-Node.js-green" },
  {
    name: "Express.js",
    badgeUrl: "https://img.shields.io/badge/-Express.js-lightgray",
  },
  { name: "MongoDB", badgeUrl: "https://img.shields.io/badge/-MongoDB-green" },
  { name: "Next.js", badgeUrl: "https://img.shields.io/badge/-Next.js-black" },
  {
    name: "JavaScript",
    badgeUrl: "https://img.shields.io/badge/-JavaScript-yellow",
  },
  { name: "GitHub", badgeUrl: "https://img.shields.io/badge/-GitHub-black" },
];

const SkillsPage = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center my-8 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white rounded-md p-4 shadow-md">
            <img src={skill.badgeUrl} alt={skill.name} className="w-24 h-8" />
            <p className="text-center mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillsPage;

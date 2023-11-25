// ProjectCard.js

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ecommerce from "@/public/project/ecommerce.png";

export const ProjectCard = ({
  title,
  description,
  githubLink,
  liveLink,
  techStack,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-gray-800 rounded-md shadow-md"
    >
      <div className="relative group rounded-lg overflow-hidden">
        <div
          className="bgimage w-full h-64 bg-cover bg-center transition duration-300 transform group-hover:scale-105"
          style={{ backgroundImage: `url(${ecommerce})` }}
        >
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
            {/* Project details */}
            <div className="absolute w-11/12 mx-auto inset-0 flex flex-col justify-center items-center text-white">
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-sm mb-4">{description}</p>
              <div className="flex space-x-4">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline"
                >
                  Live
                </a>
              </div>
              <div className="mt-2">
                <p className="text-sm font-semibold">Tech Stack:</p>
                <ul className="flex space-x-2">
                  {techStack.map((tech, index) => (
                    <li key={index} className="bg-gray-800 px-2 py-1 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

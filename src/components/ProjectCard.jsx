// ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, techStack, githubLink, demoLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto my-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className="mb-4">
        <h4 className="font-medium text-gray-600 mb-1">Tech Stack:</h4>
        <ul className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between mt-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-900 text-sm"
          >
            GitHub
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

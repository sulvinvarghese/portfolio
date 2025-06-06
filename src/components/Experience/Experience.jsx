import React, { useState } from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience, isEven }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);

  const maxChars = 500;
  const needsTruncation = experience.desc.length > maxChars;
  const displayedText = expanded
    ? experience.desc
    : experience.desc.slice(0, maxChars) + (needsTruncation ? "..." : "");

  return (
    <div
      className={`flex flex-col sm:flex-row items-center mb-16 ${
        isEven ? "sm:justify-end" : "sm:justify-start"
      }`}
    >
      {/* Timeline Circle */}
      <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
        <img
          src={experience.img}
          alt={experience.company}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Content Box */}
      <div
        className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
          isEven ? "sm:ml-0" : "sm:mr-0"
        } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
      >
        {/* Header */}
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
            <img
              src={experience.img}
              alt={experience.company}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {experience.role}
              </h3>
              <h4 className="text-md sm:text-sm text-gray-300">
                {experience.company}
              </h4>
            </div>
            <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-400 whitespace-pre-line leading-relaxed text-justify">
          {displayedText}
          {needsTruncation && (
            <span
              className="text-purple-400 ml-2 cursor-pointer font-semibold"
              onClick={toggleExpanded}
            >
              {expanded ? "Read less" : "Read more"}
            </span>
          )}
        </p>

        {/* Skills */}
        <div className="mt-4">
          <h5 className="font-medium text-white">Skills:</h5>
          <ul className="flex flex-wrap gap-2 mt-2">
            {experience.skills.map((skill, index) => (
              <li
                key={index}
                className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs sm:text-sm rounded-lg border border-gray-400"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;

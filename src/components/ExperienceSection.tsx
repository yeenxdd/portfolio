import React from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: "MM9 Limited",
    role: "Full Stack Developer",
    period: "2024 - Present",
    location: "Kuala Lumpur, Malaysia",
    achievements: [
      "Participate in innovative cloud-based applications development",
      "Develop cloud API and integrate with cloud infrastructure for partners and customers",
      "Work on Agile scrum development methodology",
      "Design and implement cross-cutting business concerns like authentication, authorization, monitoring, logging, governance, and documentation",
      "Responsible for planning & managing projects progress independently",
    ],
  },
  {
    company: "Agmo Group",
    role: "XR Developer",
    period: "2022 - 2024",
    location: "Malaysia",
    achievements: [
      "Brainstorm and propose ideas to client according to the project's concept and venue",
      "Work with cross-functional teams including artists, designers, and engineers to bring XR projects to life",
      "Develop XR applications for multiple platform using various frameworks and tools",
      "Conduct user testing and implement feedback to continuously improve the XR experience",
      "Increase team's reputation and review by 20% through stable and effective workflow and positive client review",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  const [currentExperience, setCurrentExperience] = React.useState(0);

  const nextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % experiences.length);
  };
  const prevExperience = () => {
    setCurrentExperience(
      (prev) => (prev - 1 + experiences.length) % experiences.length,
    );
  };

  return (
    <section id="experience" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentExperience * 100}%)`,
              }}
            >
              {experiences.map((exp, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 mx-4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-purple-400 mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-xl text-gray-300 mb-2">
                          {exp.company}
                        </p>
                        <p className="text-gray-400">{exp.location}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400 mt-4 md:mt-0">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={prevExperience}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 p-3 rounded-full transition-colors"
            disabled={experiences.length <= 1}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextExperience}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 p-3 rounded-full transition-colors"
            disabled={experiences.length <= 1}
          >
            <ChevronRight size={24} />
          </button>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentExperience(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentExperience ? "bg-purple-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

import React from "react";
import { TrendingUp } from "lucide-react";

const projects = [
  {
    title: "BNM MAG in Your Pocket (MAGnet) Exhibition App",
    description:
      "Engineered attractive proposals in line with project objectives, ensuring client engagement and enthusiasm. Design and implement interactive user interfaces and 360° experiences to conceptualize immersive museum experience that preserve local art pieces and engage museum visitors.",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "360° Technology"],
    impact:
      "Enhanced museum visitor engagement through immersive digital experiences",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <TrendingUp size={16} />
              <span className="text-sm">{project.impact}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

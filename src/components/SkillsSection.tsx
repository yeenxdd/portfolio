import React from "react";
import {
  Code,
  Database,
  Server,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type ColorType = "blue" | "green" | "orange" | "purple";

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  color: ColorType;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: Globe,
    color: "blue",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    name: "Backend",
    icon: Server,
    color: "green",
    skills: ["PHP", "Laravel", "Node.js", "C++", "C#", ".NET"],
  },
  {
    name: "Database",
    icon: Database,
    color: "orange",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    name: "Tools & DevOps",
    icon: Code,
    color: "purple",
    skills: ["Git", "GitHub", "PlasticSCM", "CI/CD", "DevOps"],
  },
];

const SkillsSection: React.FC = () => {
  const [currentSkillCategory, setCurrentSkillCategory] = React.useState(0);

  const nextSkillCategory = () => {
    setCurrentSkillCategory((prev) => (prev + 1) % skillCategories.length);
  };
  const prevSkillCategory = () => {
    setCurrentSkillCategory(
      (prev) => (prev - 1 + skillCategories.length) % skillCategories.length,
    );
  };

  return (
    <section id="skills" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSkillCategory * 100}%)`,
              }}
            >
              {skillCategories.map((category, index) => {
                const IconComponent = category.icon;
                const colorClasses = {
                  blue: "from-blue-800/20 to-blue-600/20 border-blue-500/20 text-blue-400",
                  green:
                    "from-green-800/20 to-green-600/20 border-green-500/20 text-green-400",
                  orange:
                    "from-orange-800/20 to-orange-600/20 border-orange-500/20 text-orange-400",
                  purple:
                    "from-purple-800/20 to-purple-600/20 border-purple-500/20 text-purple-400",
                };
                return (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 flex justify-center"
                  >
                    <div
                      className={`bg-gradient-to-br ${colorClasses[category.color]} p-12 rounded-2xl backdrop-blur-sm border max-w-md w-full mx-4`}
                    >
                      <div className="flex items-center justify-center space-x-3 mb-8">
                        <IconComponent
                          className={`${colorClasses[category.color].split(" ")[2]}`}
                          size={32}
                        />
                        <h3
                          className={`text-3xl font-bold ${colorClasses[category.color].split(" ")[2]}`}
                        >
                          {category.name}
                        </h3>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {category.skills.map((skill, i) => (
                          <div key={i} className="text-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-colors">
                              <div className="text-gray-300 font-medium">
                                {skill}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={prevSkillCategory}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 p-3 rounded-full transition-colors"
            disabled={skillCategories.length <= 1}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSkillCategory}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 p-3 rounded-full transition-colors"
            disabled={skillCategories.length <= 1}
          >
            <ChevronRight size={24} />
          </button>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSkillCategory(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSkillCategory
                    ? "bg-purple-400"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/20 inline-block">
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              Certification
            </h3>
            <p className="text-gray-300">
              AKAMAI x LINODE SuperCharger Assessment (2024)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

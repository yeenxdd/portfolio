"use client";

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
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Database,
  Server,
  Globe,
  ChevronDown,
  ExternalLink,
  Calendar,
  Users,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [currentSkillCategory, setCurrentSkillCategory] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  type ColorType = "blue" | "green" | "orange" | "purple";

  const skillCategories: {
    name: string;
    icon: React.ElementType;
    color: ColorType;
    skills: string[];
  }[] = [
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

  const experiences = [
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

  const scrollToSection = (sectionId: any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const nextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentExperience(
      (prev) => (prev - 1 + experiences.length) % experiences.length,
    );
  };

  const nextSkillCategory = () => {
    setCurrentSkillCategory((prev) => (prev + 1) % skillCategories.length);
  };

  const prevSkillCategory = () => {
    setCurrentSkillCategory(
      (prev) => (prev - 1 + skillCategories.length) % skillCategories.length,
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              TAI YE EN
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "experience",
                "projects",
                "skills",
                "languages",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-purple-400 transition-colors ${activeSection === item ? "text-purple-400" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              TAI YE EN
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6">
              Full Stack Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Bringing 3 years of experience in cloud-based applications
              development and cross-platform development, CI/CD and analytics.
              Proven success in improving team efficiency by 30%.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:yeenxdd@gmail.com"
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-colors"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 bg-transparent border border-purple-400 hover:bg-purple-400/10 px-6 py-3 rounded-full transition-colors"
            >
              <span>Get My Resume</span>
            </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate Full Stack Developer based in Kuala Lumpur,
                Malaysia, with a strong background in cloud-based applications
                and cross-platform development. My journey spans 3 years of
                hands-on experience in building innovative solutions that drive
                business success.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                I specialize in modern web technologies and have a proven track
                record of improving team efficiency and delivering projects with
                positive customer satisfaction. My expertise extends from XR
                development to full-stack web applications.
              </p>
              <div className="flex items-center space-x-4 text-gray-400">
                <MapPin size={20} />
                <span>Kuala Lumpur, Malaysia</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Experience</span>
                  <span className="font-bold">3+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">
                    Team Efficiency Improvement
                  </span>
                  <span className="font-bold text-green-400">30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Reputation Increase</span>
                  <span className="font-bold text-green-400">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
                    index === currentExperience
                      ? "bg-purple-400"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Skills Section */}
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

      {/* Languages Section */}
      <section id="languages" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Languages
          </h2>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20 max-w-md w-full">
              <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
                Spoken Languages
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                  <span className="text-lg text-gray-300">English</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                  <span className="text-lg text-gray-300">Mandarin</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                  <span className="text-lg text-gray-300">Bahasa Melayu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to bring your next project to life? I'm always open to
            discussing new opportunities and innovative ideas.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:yeenxdd@gmail.com"
              className="flex flex-col items-center space-y-4 p-6 bg-gradient-to-br from-purple-800/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              <Mail className="text-purple-400" size={32} />
              <div>
                <h3 className="font-bold text-purple-400 mb-2">Email</h3>
                <p className="text-gray-300">yeenxdd@gmail.com</p>
              </div>
            </a>

            <a
              href="#"
              className="flex flex-col items-center space-y-4 p-6 bg-gradient-to-br from-blue-800/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
            >
              <Linkedin className="text-blue-400" size={32} />
              <div>
                <h3 className="font-bold text-blue-400 mb-2">LinkedIn</h3>
                <p className="text-gray-300">Connect with me</p>
              </div>
            </a>

            <a
              href="#"
              className="flex flex-col items-center space-y-4 p-6 bg-gradient-to-br from-gray-800/20 to-gray-600/20 rounded-2xl backdrop-blur-sm border border-gray-500/20 hover:border-gray-400/40 transition-all duration-300"
            >
              <Github className="text-gray-400" size={32} />
              <div>
                <h3 className="font-bold text-gray-400 mb-2">GitHub</h3>
                <p className="text-gray-300">View my code</p>
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <MapPin size={20} />
            <span>Based in Kuala Lumpur, Malaysia</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Tai Ye En. Built with React.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

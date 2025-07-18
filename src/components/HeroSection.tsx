"use client";

import React, { useEffect } from "react";
import { Mail, ChevronDown, MapPin } from "lucide-react";
import Typed from "typed.js";

const HeroSection = () => {
  useEffect(() => {
    const typed = new Typed("#typing", {
      strings: [
        "Full Stack Developer",
        "React.js Developer",
        "Next.js Developer",
        "Node.js Developer",
      ],
      typeSpeed: 50,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mt-16 mb-8">
          <img
            src="profile_photo.jpg"
            alt="Ye En's Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-4xl mx-auto mb-6 shadow-lg"
          />
          <h1 className="text-3xl md:text-7xl font-bold mb-4 bg-gradient-to-r text-white">
            Hi! I am Ye En and
            <div className="text-xl md:text-5xl font-semibold mt-2">
              I'm a <span id="typing" className="text-purple-400" />
            </div>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Bringing 3 years of experience in cloud-based applications
            development and cross-platform development, CI/CD and analytics.
            Proven success in improving team efficiency by 30%.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <MapPin size={20} />
            <span>Based in Kuala Lumpur, Malaysia</span>
          </div>
        </div>
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="mailto:yeenxdd@gmail.com"
            className="flex items-center space-x-2 bg-purple-400 border border-purple-400 text-white hover:bg-purple-500 px-6 py-3 rounded-full transition-colors"
          >
            <Mail size={20} />
            <span>Contact Me</span>
          </a>
          <a
            href="resume.pdf"
            target="_blank"
            className="flex items-center space-x-2 bg-transparent border border-purple-400 text-white hover:bg-purple-400/10 px-6 py-3 rounded-full transition-colors"
          >
            <span>Get My Resume</span>
          </a>
        </div>
        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

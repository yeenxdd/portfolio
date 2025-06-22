import React from "react";
import { MapPin } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-gray-300 mb-6">
            I'm a passionate Full Stack Developer based in Kuala Lumpur,
            Malaysia, with a strong background in cloud-based applications and
            cross-platform development. My journey spans 3 years of hands-on
            experience in building innovative solutions that drive business
            success.
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
              <span className="text-gray-300">Team Efficiency Improvement</span>
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
);

export default AboutSection;

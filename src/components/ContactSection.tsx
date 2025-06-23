import React from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Let's Work Together
      </h2>
      <p className="text-xl text-gray-300 mb-12">
        Ready to bring your next project to life? I'm always open to discussing
        new opportunities and innovative ideas.
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
          href="https://www.linkedin.com/in/tai-ye-en/"
          target="_blank"
          className="flex flex-col items-center space-y-4 p-6 bg-gradient-to-br from-blue-800/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
        >
          <Linkedin className="text-blue-400" size={32} />
          <div>
            <h3 className="font-bold text-blue-400 mb-2">LinkedIn</h3>
            <p className="text-gray-300">Connect with me</p>
          </div>
        </a>
        <a
          href="https://github.com/yeenxdd"
          target="_blank"
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
);

export default ContactSection;

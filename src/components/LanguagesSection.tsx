import React from "react";

const LanguagesSection = () => (
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
);

export default LanguagesSection;

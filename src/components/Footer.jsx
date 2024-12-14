import React, { useState } from 'react';
import { FaRocket } from 'react-icons/fa';
import SurveyModal from './SurveyModal';

const Footer = () => {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  return (
    <footer className="bg-gray-900 py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-gray-400">
              We're passionate about creating innovative digital solutions that help businesses grow and succeed in the modern world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <p className="text-gray-400">Email: contact@elgarage.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ELgarage. All Rights Reserved.
            </p>
            <button
              onClick={() => setIsSurveyOpen(true)}
              className="group px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full font-medium text-white hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center space-x-2 transform hover:scale-105 transition-all duration-200"
            >
              <FaRocket className="transform group-hover:rotate-45 transition-transform duration-200" />
              <span>Take Our Marketing Survey</span>
            </button>
          </div>
        </div>
      </div>

      <SurveyModal isOpen={isSurveyOpen} onClose={() => setIsSurveyOpen(false)} />
    </footer>
  );
};

export default Footer;

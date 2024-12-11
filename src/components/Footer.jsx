import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaTimes, FaRocket } from 'react-icons/fa';

const SurveyModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    marketingGoals: '',
    timeline: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement email sending logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900 rounded-xl p-8 max-w-md w-full shadow-2xl border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Marketing Strategy Survey
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                >
                  <option value="">Select a range</option>
                  <option value="0-5000">$0 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000-25000">$10,000 - $25,000</option>
                  <option value="25000+">$25,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Marketing Goals</label>
                <textarea
                  name="marketingGoals"
                  value={formData.marketingGoals}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  rows="3"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6months+">6+ months</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-200"
              >
                <span>Submit Survey</span>
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

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

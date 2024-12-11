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
    services: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const services = [
    'Social Media Marketing',
    'Content Creation',
    'Web Development',
    'SEO Optimization',
    'Brand Strategy',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[9999] p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-2xl p-8 max-w-2xl w-full shadow-2xl border border-gray-700/50 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
            >
              <FaTimes size={24} />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="inline-block p-3 bg-blue-500/10 rounded-full mb-4"
              >
                <FaRocket size={32} className="text-blue-400" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-teal-400 bg-clip-text text-transparent">
                Marketing Strategy Survey
              </h2>
              <p className="text-gray-400 mt-2">
                Help us understand your needs better
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info Section */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all"
                      placeholder="John Doe"
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all"
                    placeholder="Your Company Name"
                  />
                </div>
              </div>

              {/* Services Section */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Services You're Interested In
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg cursor-pointer hover:bg-gray-800/50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                        checked={formData.services.includes(service)}
                        onChange={handleChange}
                        className="w-4 h-4 text-blue-500 border-gray-700 rounded focus:ring-blue-500 focus:ring-offset-gray-900"
                      />
                      <span className="text-gray-300">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget and Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
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
                  <label className="block text-sm font-medium text-gray-300 mb-1">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    required
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                  </select>
                </div>
              </div>

              {/* Marketing Goals */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Marketing Goals</label>
                <textarea
                  name="marketingGoals"
                  value={formData.marketingGoals}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 transition-all"
                  rows="4"
                  placeholder="Tell us about your marketing goals and objectives..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center space-x-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                <span className="text-lg">Submit Survey</span>
                <FaPaperPlane className="text-lg" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SurveyModal;

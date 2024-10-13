import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services = () => {
  const { ref, controls } = useScrollAnimation(0.3);

  return (
    <section
      ref={ref}
      id="services-section"
      className="p-10 bg-gray-800 text-white h-screen"
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 }, // Hidden state
          visible: { opacity: 1, y: 0 }, // Visible state
        }}
        transition={{ duration: 1.2 }}
      >
        Our Services
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 1.5 }}
      >
        {/* Each service box */}
        <motion.div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
          <p>We build scalable web applications with modern technologies.</p>
        </motion.div>

        <motion.div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Mobile Development</h3>
          <p>Building high-performance mobile apps for various platforms.</p>
        </motion.div>

        <motion.div className="bg-gray-700 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
          <p>Creating user-friendly and appealing interfaces for digital products.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation'; // Import the custom hook
import { FaLaptopCode, FaBrain, FaPalette, FaBullhorn } from 'react-icons/fa'; // Icons for sections
import garageImage from '../data/SilconValleyBinge.webp'; 
import siliconvalleyfront from '../data/silicon-valley-front.jpg';

const About = () => {
  const { ref, controls } = useScrollAnimation(0.3); // Activate when 30% is in view

  return (
    <section
      ref={ref} // Attach the Intersection Observer ref
      id="about-section"
      className="relative p-10 bg-gray-900 text-white overflow-hidden min-h-screen"
    >
      {/* Flickering Light Effect */}
      <motion.div
        className="absolute inset-0 z-0 bg-gray-700 opacity-40"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.5, 0.4, 0.6, 0.3] }} // Flickering effect
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />

      {/* About Us Section Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Side: Image of the Team */}
        <motion.div
          className="relative"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 }, // Slide in from the left
            visible: { opacity: 1, x: 0 },  // Fade in and move to the normal position
          }}
          transition={{ duration: 1.2 }}
        >
          <img 
            src={garageImage} 
            alt="Garage Workspace" 
            className="w-full h-auto rounded-3xl shadow-lg" 
            style={{ filter: 'brightness(0.5)' }} // Darken the image with brightness
          />
          <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div> {/* Black overlay */}
        </motion.div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 }, // Start off-screen and transparent
              visible: { opacity: 1, y: 0 }, // Fade in and move up
            }}
            transition={{ duration: 1.2 }}
          >
            About Us
          </motion.h2>

          <motion.p
            className="text-lg mb-4"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -20 }, // Start to the left and transparent
              visible: { opacity: 1, x: 0 }, // Slide in from the left and fade in
            }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            We started as a small team of passionate developers, hacking away in a garage. Today, we build cutting-edge tech solutions. Partner with us to bring your vision to life.
          </motion.p>
        </div>
      </div>

      {/* Key Offerings with Icons and Animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ delay: 1.2, duration: 1.5 }}
      >
        {/* Web Development */}
        <motion.div
          className="p-6 bg-gray-800 rounded-xl text-center shadow-lg transform transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <FaLaptopCode className="text-5xl text-teal-400 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-2">Web Development</h3>
          <p>We create fast, scalable, and efficient web applications to power your business.</p>
        </motion.div>

        {/* Artificial Intelligence */}
        <motion.div
          className="p-6 bg-gray-800 rounded-xl text-center shadow-lg transform transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <FaBrain className="text-5xl text-teal-400 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-2">Artificial Intelligence</h3>
          <p>Unlock the potential of AI to automate, optimize, and drive innovative solutions.</p>
        </motion.div>

        {/* Design */}
        <motion.div
          className="p-6 bg-gray-800 rounded-xl text-center shadow-lg transform transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <FaPalette className="text-5xl text-teal-400 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-2">Creative Design</h3>
          <p>From UI/UX to branding, we bring your ideas to life with cutting-edge designs.</p>
        </motion.div>

        {/* Marketing */}
        <motion.div
          className="p-6 bg-gray-800 rounded-xl text-center shadow-lg transform transition-transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <FaBullhorn className="text-5xl text-teal-400 mb-4 mx-auto" />
          <h3 className="text-2xl font-bold mb-2">Marketing</h3>
          <p>Maximize your business reach with our data-driven digital marketing strategies.</p>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default About;

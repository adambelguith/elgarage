import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animation
import './Hero.css'; // Create a custom CSS file for the wavy text

const Hero = () => {
  const handleArrowClick = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-gray-900 overflow-hidden">
      
      {/* Animated Background using Framer Motion */}
      <motion.div
        className="absolute inset-0 z-0 bg-hero-pattern bg-cover bg-center bg-no-repeat"
        initial={{ y: '-100%' }}    // Start with the background off the top of the screen
        animate={{ y: 0 }}          // Animate it to slide down into view
        transition={{ duration: 2, ease: 'easeInOut' }}  // Control the speed and smoothness
      >
        {/* Black overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </motion.div>

      {/* Hero Content with Wavy Text Effect */}
      <div className="relative z-10 text-white">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ y: 0 }}                    // Start at default position
          animate={{ y: [0, -10, 0] }}          // Animate text bouncing up and down
          transition={{ 
            duration: 1,                        // 1-second animation for each bounce
            ease: 'easeInOut', 
            repeat: 2                           // Repeat the animation 2 more times (total of 3 iterations)
          }}
        >
          Welcome to The Garage
        </motion.h1>
        <p className="text-lg text-gray-400 mb-6">Where innovation begins</p>
      </div>

      {/* Arrow Positioned at the Bottom of the Hero Section */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mb-16 cursor-pointer"
        initial={{ y: 0 }}                    // Start at default position
        animate={{ y: [0, 20, 0] }}           // Animate arrow bouncing up and down
        transition={{ 
          duration: 1,                        // 1-second animation for each bounce
          ease: 'easeInOut', 
          repeat: 2                           // Repeat the animation 2 more times (total of 3 iterations)
        }}
        whileHover={{ scale: 1.2 }}            // Enlarge on hover
        onClick={handleArrowClick}             // Scroll to About section on click
      >
        {/* Downward Arrow */}
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </motion.div>

    </section>
  );
}

export default Hero;

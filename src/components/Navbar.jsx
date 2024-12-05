import React from 'react';
import { motion } from 'framer-motion'; 

const Navbar = () => {
  const handleArrowClick = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full h-screen text-white">
      <motion.div
        className="absolute inset-0 z-0 bg-hero-pattern bg-cover bg-center bg-no-repeat"
        initial={{ y: '-100%' }}    
        animate={{ y: 0 }}        
        transition={{ duration: 2, ease: 'easeInOut' }}  
      >

        <div className="absolute inset-0 bg-black opacity-40"></div>
      </motion.div>

      <nav className="relative z-10 flex items-center justify-between p-6">
        <div className="text-3xl font-bold">ELGARAGE AGENCY</div>
        <ul className="flex space-x-6">
          <li><a href="#about-section" className="hover:text-teal-400 transition">About</a></li>
          <li><a href="#services-section" className="hover:text-teal-400 transition">Services</a></li>
          <li><a href="#contact-section" className="hover:text-teal-400 transition">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Content with Wavy Text Effect */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ y: 0 }}                    
          animate={{ y: [0, -10, 0] }}          
          transition={{ 
            duration: 1,                        // 1-second animation for each bounce
            ease: 'easeInOut', 
            repeat: 2                           // Repeat the animation 2 more times (total of 3 iterations)
          }}
        >
          Welcome to ELGARAGE
        </motion.h1>

        <p className="text-lg text-gray-400 mb-6">Where innovation begins</p>

        {/* Arrow Positioned at the Bottom of the Hero Section */}
        <motion.div
          className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 mb-5 cursor-pointer"
          initial={{ y: 0 }}                    // Start at default position
          animate={{ y: [0, 20, 0] }}           // Animate arrow bouncing up and down
          transition={{ 
            duration: 1,                        // 1-second animation for each bounce
            ease: 'easeInOut', 
            repeat: 3                           // Repeat the animation 2 more times (total of 3 iterations)
          }}
          whileHover={{ scale: 2, translateZ:4 }}            // Enlarge on hover
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
      </div>
    </header>
  );
};

export default Navbar;

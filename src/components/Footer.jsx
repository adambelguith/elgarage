import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} The Garage. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-teal-400 transition">Twitter</a>
          <a href="#" className="hover:text-teal-400 transition">LinkedIn</a>
          <a href="#" className="hover:text-teal-400 transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

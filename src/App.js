import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <Navbar />
      <main className=" ">
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;

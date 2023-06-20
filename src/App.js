import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;

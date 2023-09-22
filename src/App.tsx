import './App.css';
import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Section/About';
import Blueprint from './Section/Blueprint';
import DesignWorkContentPageWip from './Section/DesignWorkContentPageWip';
import DesignWork from './Section/DesignWork';
import DevWork from './Section/DevWork';
import Extra from './Section/Extra';
import Footer from './Section/Footer';
import Header from './Section/Header';
import Homepage from './Section/Homepage';
import Humanityco from './Section/Humanityco';
import Navbar from './Navbar';
import Willspace from './Section/Willspace';
import WillspaceMarketing from './Section/WillspaceMarketing';
import WebsiteWork from './Section/WebsiteWork';
import LMS from './Section/LMS';
import CreditCardForm from './Section/CreditCardForm';
import PortfolioWebsite from './Section/PortfolioWebsite';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/design-work" element={<DesignWork />} />
          <Route path="/dev-work" element={<DevWork />} />
          <Route path="/credit-card-form" element={<CreditCardForm />} />
          <Route path="/portfolio-website" element={<PortfolioWebsite />} />
          <Route path="/about" element={<About />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="/header" element={<Header />} />
          <Route path="/project-1" element={<DesignWorkContentPageWip />} />
          <Route path="/humanityco" element={<Humanityco />} />
          <Route path="/willspace" element={<Willspace />} />
          <Route path="/blueprint" element={<Blueprint />} />
          <Route path="/willspace-marketing" element={<WillspaceMarketing />} />
          <Route path="/website-work" element={<WebsiteWork />} />
          <Route path="learning-management-system" element={<LMS />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

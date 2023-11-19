import './App.css';
import { useCallback } from 'react';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Section/About';
import Blueprint from './Section/Blueprint';
import DesignWorkContentPageWip from './Section/Portoflio';
import DesignWork from './Section/DesignWork';
import DevWork from './Section/DevWork/DevWorkPage';
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
import CreditCardForm from './Section/InteractiveCreditCardPage';
import Contact from './Section/Contact';
import Portfolio from './Section/Portoflio';
// import PortfolioWebsite from './Section/DevWork/DevWork';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/header" element={<Header id="header" />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/extra" element={<Extra />} />

          {/* // Development Work */}
          <Route path="/dev-work" element={<DevWork />} />
          <Route path="/credit-card-form" element={<CreditCardForm />} />
          <Route path="/project-2" element={<DesignWorkContentPageWip />} />
          <Route path="/project-3" element={<DesignWorkContentPageWip />} />
          <Route path="/portfolio" element={<Portfolio />} />

          {/* // Design Work */}
          <Route path="/design-work" element={<DesignWork />} />
          {/* <Route path="/portfolio-website" element={<PortfolioWebsite />} /> */}
          <Route path="/humanityco" element={<Humanityco />} />
          <Route path="/willspace" element={<Willspace />} />
          <Route path="/blueprint" element={<Blueprint />} />
          <Route path="/willspace-marketing" element={<WillspaceMarketing />} />
          <Route path="/website-work" element={<WebsiteWork />} />
          <Route path="learning-management-system" element={<LMS />} />

          <Route path="/project-1" element={<DesignWorkContentPageWip />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;

import './App.css';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blueprint from './Section/DesignWork/Blueprint';
import DesignWorkContentPageWip from './Section/DevWork/PortoflioPage';
import DesignWork from './Section/DesignWork/DesignWork';
import DevWork from './Section/DevWork/DevWorkPage';
import Extra from './Section/Extra';
import Footer from './components/Footer';
import Header from './Section/Header';
import Homepage from './Section/Homepage';
import Humanityco from './Section/DesignWork/Humanityco';
import Navbar from './components/Navbar';
import Willspace from './Section/DesignWork/Willspace';
import WillspaceMarketing from './Section/DesignWork/WillspaceMarketing';
import WebsiteWork from './Section/DesignWork/WebsiteWork';
import LMS from './Section/DesignWork/LMS';
import CreditCardForm from './Section/DevWork/InteractiveCreditCardPage';
import Contact from './Section/Contact';
import PortfolioPage from './Section/DevWork/PortoflioPage';
import { DarkModeProvider } from './DarkModeContext';
// import PortfolioWebsite from './Section/DevWork/DevWork';

function App() {
  return (
    <>
    <DarkModeProvider>
      <Router>
        <Navbar />
        {/* TODO: refer to seg to see how to organize route */}
        <Routes>
          <Route path="/header" element={<Header id="header" />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/extra" element={<Extra />} />

          {/* // Development Work */}
          <Route path="/dev-work" element={<DevWork />} />
          <Route path="/credit-card-form" element={<CreditCardForm />} />
          <Route path="/project-2" element={<DesignWorkContentPageWip />} />
          <Route path="/project-3" element={<DesignWorkContentPageWip />} />
          <Route path="/portfolio" element={<PortfolioPage />} />

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
    </DarkModeProvider>
    </>
  );
}

export default App;

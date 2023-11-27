import './App.css';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blueprint from './Section/Design/Blueprint';
import DesignWorkContentPageWip from './Section/Development/PortoflioDetail';
import DesignWork from './Section/Design/DesignWorkPage';
import DevWork from './Section/Development/DevelopmentWorkPage';
import Extra from './Extra';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './Section/Homepage';
import Humanityco from './Section/Design/Humanityco';
import Navbar from './components/Navbar';
import Willspace from './Section/Design/Willspace';
import WillspaceMarketing from './Section/Design/WillspaceMarketing';
import WebsiteWork from './Section/Design/WebsiteWork';
import LMS from './Section/Design/LMS';
import CreditCardForm from './Section/Development/InteractiveCreditCardDetail';
import Contact from './Section/Contact';
import PortfolioPage from './Section/Development/PortoflioDetail';
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

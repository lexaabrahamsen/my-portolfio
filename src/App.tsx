import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blueprint from './Section/Design/Blueprint';
import DesignWorkContentPageWip from './Section/Development/PortfolioPage';
import DesignWork from './Section/Design/DesignWorkPage';
import DevelopmentWorkSection from './Section/Development/DevelopmentWorkSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './Section/Homepage';
import Humanityco from './Section/Design/Humanityco';
import Navbar from './components/Navbar';
import Willspace from './Section/Design/Willspace';
import WillspaceMarketing from './Section/Design/WillspaceMarketing';
import WebsiteWork from './Section/Design/WebsiteWork';
import LMS from './Section/Design/LMS';
import Contact from './Section/Contact';
import PortfolioPage from './Section/Development/PortfolioPage';
import { DarkModeProvider } from './DarkModeContext';
import MusicVisualizerPage from './Section/Development/MusicVizualizerPage';
import InteractiveCreditCardPage from './Section/Development/InteractiveCreditCardPage';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Navbar />
        {/* TODO: refer to seg to see how to organize route */}
        <Routes>
          <Route path="/header" element={<Header id="header" />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />

          {/* // Development Work */}
          <Route path="/development-work" element={<DevelopmentWorkSection />} />
          <Route path="/credit-card-form" element={<InteractiveCreditCardPage />} />
          <Route path="/music-visualizer" element={<MusicVisualizerPage />} />
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
  );
}

export default App;

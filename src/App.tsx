import './App.css';
import About from './Section/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Section/Homepage';
import Header from './Section/Header';
import Footer from './Section/Footer';
import Extra from './Section/Extra';
import DesignWork from './Section/DesignWork';
import DesignWorkContentPageWip from './Section/DesignWorkContentPageWip';
import DevWork from './Section/DevWork';
import Humanityco from './Section/Humanityco';
import Willspace from './Section/Willspace';
import Blueprint from './Section/Blueprint';
import WillspaceMarketing from './Section/WillspaceMarketing';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Header />
        <DesignWork /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/design-work" element={<DesignWork />} />
          <Route path="/dev-work" element={<DevWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="/header" element={<Header />} />
          <Route path="/project-1" element={<DesignWorkContentPageWip />} />
          <Route path="/humanityco" element={<Humanityco />} />
          <Route path="/willspace" element={<Willspace />} />
          <Route path="/blueprint" element={<Blueprint />} />
          <Route path="/willspace-marketing" element={<WillspaceMarketing />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

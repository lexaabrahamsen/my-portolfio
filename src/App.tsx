import './App.css';
import { useCallback } from 'react';
// import Particles from 'react-particles';
// import type { Container, Engine } from 'tsparticles-engine';
// import { loadSlim } from 'tsparticles-slim';
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

function App() {
  // const particlesInit = useCallback(async (engine: Engine) => {
  //   console.log(engine);

  //   // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   //await loadFull(engine);
  //   await loadSlim(engine);
  // }, []);

  // const particlesLoaded = useCallback(
  //   async (container: Container | undefined) => {
  //     await console.log(container);
  //   },
  //   []
  // );
  return (
    <>
      <Router>
        <Navbar />
        {/* <Header />
        <DesignWork /> */}
        <div className="xl:py-3 lg:py-5 md:py-5 sm:py-5 px-15 flex flex-wrap xl:ml-20 xl:mr-20">
          {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: '#0d47a1',
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: 'push',
                  },
                  onHover: {
                    enable: true,
                    mode: 'repulse',
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: '#ffffff',
                },
                links: {
                  color: '#ffffff',
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: 'none',
                  enable: true,
                  outModes: {
                    default: 'bounce',
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: 'circle',
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          /> */}
        </div>
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
          <Route path="/website-work" element={<WebsiteWork />} />
          <Route path="learning-management-system" element={<LMS />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

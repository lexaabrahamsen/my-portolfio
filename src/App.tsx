import './App.css';
import About from './Section/About';
import Projects from './Section/Projects';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Section/Homepage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/about' element={<Projects />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

import './App.css';
import About from './Section/About';
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
        </Routes>
      </Router>
    </>
  );
}

export default App;

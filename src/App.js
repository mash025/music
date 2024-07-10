import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import AcademicOfferings from './pages/academic-offerings';
import MusicRoom from './pages/music-room';
import Events from './pages/events';
import StudentWorks from './pages/student-works';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/academic-offerings' element={<AcademicOfferings />} />
          <Route path='/music-room' element={<MusicRoom />} />
          <Route path='/events' element={<Events />} />
          <Route path='/student-works' element={<StudentWorks />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

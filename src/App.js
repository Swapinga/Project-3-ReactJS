import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import AutosPage from './components/AutosPage/AutosPage';
import MotosPage from './components/MotosPage/MotosPage';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/autos" element={<AutosPage />} />
          <Route path="/motos" element={<MotosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

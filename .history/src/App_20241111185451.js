import React from 'react';
import './App.css';
import Accueil from './components/accueil';
import Profile from './components/profile';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/accueil" element={<Accueil />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
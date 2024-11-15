import React from 'react';
import './App.css';
import Accueil from './components/accueil';
import Profile from './components/profile';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/accueil" element={<Accueil />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

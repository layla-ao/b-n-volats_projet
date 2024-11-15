import React from 'react';
import './App.css';
import 
import Profile from './components/profile';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';  // Importation de BrowserRouter
import Footer from './components/footer';

function App() {
  return (
    <Routes>
      <Router>
    <div className="App">
      <Navbar />
      <Footer />
    </div>
      </Router>
      <Router>

    <div className="main-content">
    <Route path="/profile" element={<Profile />} />
      <Route path="/accueil" element={<Accueil />} />
      </div>
      </Router>
    </Routes>
  );
}
export default App;

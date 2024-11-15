import React from 'react';
import './App.css';
import Profile from './components/profile';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';  // Importation de BrowserRouter
import Footer from './components/footer';

function App() {
  return (
    
    <Router>
    <div className="App">
      <Navbar />
      <Footer />
    </div>
    </Router>
    <div className="main-content">
    <Route path="/accueil" element={<Accueil />} />
      <Route path="/accueil" element={<Accueil />} />
      
    </Routes>
  );
}
export default App;

import React from 'react';
import './App.css';
import Profile from './components/profile';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';  // Importation de BrowserRouter

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Profile />
      <Footer
    </div>
    </Router>
  );
}
export default App;

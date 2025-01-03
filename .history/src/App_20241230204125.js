import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/SignUp/SignUp';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/navbar';

function App() {
  const [isAuthNavbarVisible, setIsAuthNavbarVisible] = useState(false);

  // Fonction pour afficher uniquement la première barre de navigation
  const handleShowAuthNavbar = () => {
    setIsAuthNavbarVisible(true);
  };

  // Fonction pour réinitialiser la visibilité
  const handleHideAuthNavbar = () => {
    setIsAuthNavbarVisible(false);
  };

  return (
    <Router>
      <div className="App">
          <nav className="auth-navbar">
            <h1 className="logo">ساعد</h1>
            <Link to="/" className="nav-button home-button" onClick={handleHideAuthNavbar}>
              Accueil
            </Link>
            <div className="nav-buttons">
              <Link to="/signup" className="nav-button" onClick={handleHideAuthNavbar}>
                S'inscrire
              </Link>
              <Link to="/login" className="nav-button" onClick={handleShowAuthNavbar}>
                Se connecter
              </Link>
            </div>
          </nav>
        

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={
              <Signup />
            }
          />
          <Route
            path="/login"
            element={
              <Login />
            }
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import Signup from './components/Auth/SignUp/SignUp';
import Login from './components/Auth/Login/Login';
import Home from './components/Home/Home';
import Profile from './components/Profil/profile';
import EditProfile from './components/Profil/editprofile';
import Publication from './components/Publication/publication';
import Events from './components/Events/events';
import Dashboard from './components/Dashboard/Dashboard';
import Chatbot from './components/Chatbot/Chatbot';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // État de connexion
  const [isAdmin, setIsAdmin] = useState(false); // État pour les administrateurs

  // Gestion de la connexion
  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setIsAdmin(role === 'admin'); // Si le rôle est admin, activer le mode admin
  };

  // Gestion de la déconnexion
  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} handleLogout={handleLogout} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signup"
              element={isAuthenticated ? <Navigate to="/" /> : <Signup />}
            />
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/" />
                ) : (
                  <Login onLogin={(role) => handleLogin(role)} />
                )
              }
            />
            <Route
              path="/profile"
              element={
                isAuthenticated ? <Profile /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/edit-profile"
              element={
                isAuthenticated ? <EditProfile /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/publication"
              element={
                isAuthenticated ? <Publication /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/events"
              element={isAuthenticated ? <Events /> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated && isAdmin ? (
                  <Dashboard />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </div>
        {isAuthenticated && <Chatbot />}
      </div>
    </Router>
  );
}

// Composant Navbar
function Navbar({ isAuthenticated, isAdmin, handleLogout }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">ساعد</h1>
      <Link to="/" className="nav-button">Accueil</Link>

      {isAuthenticated ? (
        <>
          <Link to="/events" className="nav-button">Événements</Link>
          <Link to="/publication" className="nav-button">Publications</Link>
          <Link to="/profile" className="nav-button">Profil</Link>
          {isAdmin && <Link to="/dashboard" className="nav-button">Dashboard</Link>}
          <button className="nav-button logout-button" onClick={handleLogout}>
            Déconnexion
          </button>
        </>
      ) : (
        <>
          <Link to="/signup" className="nav-button">S'inscrire</Link>
          <Link to="/login" className="nav-button">Se connecter</Link>
        </>
      )}
    </nav>
  );
}

export default App;

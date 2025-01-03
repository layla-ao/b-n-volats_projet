import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Home from './components/Home/Home';
import Profile from './components/Profil/profile';
import EditProfile from './components/Profil/editprofile';
import Accueil from './components/Accueil/accueil';
import Sante from './components/Events/sante';
import Sociale from './components/Events/sociale';
import Animaux from './components/Events/animaux';
import Publication from './components/Publication/publication';
import Chatbot from './components/Chatbot/Chatbot';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Auth/SignUp/SignUp';
import Login from './components/Auth/Login/Login';

// Fonction ProtectedRoute
const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // État de connexion
  const [userRole, setUserRole] = useState(null); // Rôle de l'utilisateur (exemple : 'user' ou 'admin')

  const [userData, setUserData] = useState({
    name: 'Laila Aouadi',
    email: 'Laila@gmail.com',
    phone: '(216) 51819776',
    address: 'Ariana, Tunisie',
    poste: 'Santé',
    date: '12/11/1999',
    role: 'admin', // Rôle par défaut (admin)
  });

  const [activeSection, setActiveSection] = useState('opportunity');

  // Fonction pour mettre à jour les données de profil
  const updateUserData = (newData) => {
    setUserData(newData);
  };

  // Gestion de la connexion
  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  // Gestion de la déconnexion
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          isAuthenticated={isAuthenticated}
          userRole={userRole}
          handleLogout={handleLogout}
        />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signup"
              element={
                isAuthenticated ? (
                  <Navigate to="/" />
                ) : (
                  <Signup onSignup={(role) => handleLogin(role)} />
                )
              }
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
                isAuthenticated ? (
                  <Profile userData={userData} updateUserData={updateUserData} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/profile/edit-profile"
              element={
                isAuthenticated ? (
                  <EditProfile
                    userData={userData}
                    updateUserData={updateUserData}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/accueil" element={<Accueil />} />
            <Route
              path="/sante"
              element={isAuthenticated ? <Sante /> : <Navigate to="/login" />}
            />
            <Route
              path="/sociale"
              element={isAuthenticated ? <Sociale /> : <Navigate to="/login" />}
            />
            <Route
              path="/animaux"
              element={isAuthenticated ? <Animaux /> : <Navigate to="/login" />}
            />
            <Route
              path="/publication"
              element={
                isAuthenticated ? <Publication /> : <Navigate to="/login" />
              }
            />
            {/* Route sécurisée pour le Dashboard */}
            <Route
              path="/dashboard"
              element={
                isAuthenticated && userRole === 'admin' ? (
                  <Dashboard activeSection={activeSection} />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </div>
        {!isAuthenticated && <Footer />}
        {isAuthenticated && <Chatbot />}
      </div>
    </Router>
  );
}

// Composant Navbar
function Navbar({ isAuthenticated, userRole, handleLogout }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">ساعد</h1>
      <Link to="/" className="nav-button">Accueil</Link>

      {isAuthenticated ? (
        <>
          <Link to="/accueil" className="nav-button">Accueil</Link>
          <Link to="/sante" className="nav-button">Santé</Link>
          <Link to="/sociale" className="nav-button">Sociale</Link>
          <Link to="/animaux" className="nav-button">Animaux</Link>
          <Link to="/publication" className="nav-button">Publications</Link>
          <Link to="/profile" className="nav-button">Profil</Link>
          {userRole === 'admin' && (
            <Link to="/dashboard" className="nav-button">Dashboard</Link>
          )}
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

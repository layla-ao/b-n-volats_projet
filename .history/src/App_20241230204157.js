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
  const [userData, setUserData] = useState({
    name: 'Laila Aouadi',
    email: 'Laila@gmail.com',
    phone: '(216) 51819776',
    address: 'Ariana, Tunisie',
    poste: 'Santé',
    date: '12/11/1999',
    role: 'admin', // Ajouter un rôle pour l'utilisateur (exemple : 'user' ou 'admin')
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false); // État de connexion
  const [activeSection, setActiveSection] = useState('opportunity');

  // Fonction pour mettre à jour les données de profil
  const updateUserData = (newData) => {
    setUserData(newData);
  };

  // Gestion de la connexion
  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setUserData((prevData) => ({ ...prevData, role }));
  };

  // Gestion de la déconnexion
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData({});
  };

  return (
    <Router>
      <div className="App">
        <Content
          userData={userData}
          isAuthenticated={isAuthenticated}
          activeSection={activeSection}
          updateUserData={updateUserData}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
      </div>
    </Router>
  );
}

function Content({
  userData,
  isAuthenticated,
  activeSection,
  updateUserData,
  handleLogin,
  handleLogout,
}) {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="App">
      {/* Affiche le Navbar uniquement si ce n'est pas le Dashboard */}
      {!isDashboard && (
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      )}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={
              <div>
                <nav className="navbar">
                  <h1 className="logo"> <span>ساعد</span></h1>
                  <Link to="/" className="nav-button home-button">Accueil</Link>
                  <div className="nav-buttons">
                    <Link to="/signup" className="nav-button">S'inscrire</Link>
                    <Link to="/login" className="nav-button">Se connecter</Link>
                  </div>
                </nav>
                <Signup onSignup={(role) => handleLogin(role)} />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div>
                <nav className="navbar">
                  <h1 className="logo"> <span>ساعد</span></h1>
                  <Link to="/" className="nav-button home-button">Accueil</Link>
                  <div className="nav-buttons">
                    <Link to="/signup" className="nav-button">S'inscrire</Link>
                    <Link to="/login" className="nav-button">Se connecter</Link>
                  </div>
                </nav>
                <Login onLogin={(role) => handleLogin(role)} />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile userData={userData} updateUserData={updateUserData} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/edit-profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <EditProfile
                  userData={userData}
                  updateUserData={updateUserData}
                />
              </ProtectedRoute>
            }
          />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/sante" element={<Sante />} />
          <Route path="/sociale" element={<Sociale />} />
          <Route path="/animaux" element={<Animaux />} />
          <Route path="/publication" element={<Publication />} />
          {/* Route sécurisée pour le Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={userData.role === 'admin'}>
                <Dashboard activeSection={activeSection} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      {/* Affiche le Footer uniquement si ce n'est pas le Dashboard */}
      {!isDashboard && <Footer />}
      {!isDashboard && <Chatbot />}
    </div>
  );
}

export default App;
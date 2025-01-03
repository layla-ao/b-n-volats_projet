import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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

  const [activeSection, setActiveSection] = useState('opportunity');

  // Fonction pour mettre à jour les données de profil
  const updateUserData = (newData) => {
    setUserData(newData);
  };

  return (
    <Router>
      <Content
        userData={userData}
        activeSection={activeSection}
        updateUserData={updateUserData}
      />
    </Router>
  );
}

function Content({ userData, activeSection, updateUserData }) {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="App">
      {/* Affiche le Navbar uniquement si ce n'est pas le Dashboard */}
      {!isDashboard && <Navbar />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile userData={userData} updateUserData={updateUserData} />} />
          <Route
            path="profile/edit-profile"
            element={<EditProfile userData={userData} updateUserData={updateUserData} />}
          />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/event/sante" element={<Sante />} />
          <Route path="/event/sociale" element={<Sociale />} />
          <Route path="/event/animaux" element={<Animaux />} />
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

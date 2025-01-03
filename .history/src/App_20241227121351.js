import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Auth/SignUp/SignUp';
import Login from './components/Auth/Login/Login';
import Home from './components/Home/Home';
import Accueil from './components/Accueil/Accueil';
import Acueil from './components/Accueil/acueil';
import Profile from './components/Profil/profile';
import EditProfile from './components/Profil/editprofile';
import Publication from './components/Publication/publication';
import Sante from './components/Events/sante';
import Sociale from './components/Events/sociale';
import Animaux from './components/Events/animaux';
import Layout from './components/Layout';  // Import du Layout
import './App.css';

function App() {
  const [userData, setUserData] = useState({
    name: 'Laila Aouadi',
    email: 'Laila@gmail.com',
    phone: '(216) 51819776',
    address: 'Ariana, Tunisie',
    poste: 'Santé',
    date: '12/11/1999'
  });

  // Function to update user data
  const updateUserData = (newData) => {
    setUserData(newData);
  };

  return (
    <Router>
      <Routes>
        {/* Navbar pour Home, Login, Signup */}
        <Route
          path="/"
          element={
            <div>
              <nav className="navbar">
                <h1 className="logo">نبض <span>التطوع</span></h1>
                <Link to="/" className="nav-button home-button">Accueil</Link>
                <div className="nav-buttons">
                  <Link to="/signup" className="nav-button">S'inscrire</Link>
                  <Link to="/login" className="nav-button">Se connecter</Link>
                </div>
              </nav>
              <Home />
            </div>
          }
        />

        <Route
          path="/signup"
          element={
            <div>
              <nav className="navbar">
                <h1 className="logo">نبض <span>التطوع</span></h1>
                <Link to="/" className="nav-button home-button">Accueil</Link>
                <div className="nav-buttons">
                  <Link to="/signup" className="nav-button">S'inscrire</Link>
                  <Link to="/login" className="nav-button">Se connecter</Link>
                </div>
              </nav>
              <Signup />
            </div>
          }
        />

        <Route
          path="/login"
          element={
            <div>
              <nav className="navbar">
                <h1 className="logo">نبض <span>التطوع</span></h1>
                <Link to="/" className="nav-button home-button">Accueil</Link>
                <div className="nav-buttons">
                  <Link to="/signup" className="nav-button">S'inscrire</Link>
                  <Link to="/login" className="nav-button">Se connecter</Link>
                </div>
              </nav>
              <Login />
            </div>
          }
        />



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
            path="/edit-profile"
            element={<EditProfile userData={userData} updateUserData={updateUserData} />}
          />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/event" element={<Event />} />
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


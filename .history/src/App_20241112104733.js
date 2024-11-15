import React,  { useState } from 'react';
import './App.css';
import Accueil from './components/accueil';
import Profile from './components/profile';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import EditProfile from './components/EditProfile';

function App() {
  const [userData, setUserData] = useState({
    name: 'Laila Aouadi',
    email: 'Laila@gmail.com',
    phone: '(216) 51819776',
    address: 'Ariana, Tunisie',
    poste: 'Santé',
    date:''
  });

  // Fonction pour mettre à jour les données de profil
  const updateUserData = (newData) => {
    setUserData(newData);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile userData={userData} updateUserData={updateUserData} />} />
            <Route 
          path="/edit-profile" 
          element={<EditProfile userData={userData} updateUserData={updateUserData} />} 
        />
            <Route path="/accueil" element={<Accueil />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

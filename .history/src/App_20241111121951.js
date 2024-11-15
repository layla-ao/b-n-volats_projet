import React from 'react';
import './App.css';
import Profile from './components/profile';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Profile />
    </div>
  );
}
export default App;

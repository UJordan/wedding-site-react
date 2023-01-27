import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import ReservationPage from './pages/ReservationPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='INFO' element={<InfoPage />}/>
        <Route path='RESERVATION' element={<ReservationPage />}/>
        <Route path='CONTACT' element={<ContactPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HospitalAppointment from './components/HospitalAppointment';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HospitalAppointment />
      <Footer />
    </div>
  );
}

export default App;

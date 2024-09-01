import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Convert from './Convert';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/convert" element={<Convert />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

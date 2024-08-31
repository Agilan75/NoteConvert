import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NoteTaking from './NoteTaking';
import Flashcards from './Flashcards';
import StudySchedule from './StudySchedule';
import Settings from './Settings';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<NoteTaking />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/schedule" element={<StudySchedule />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


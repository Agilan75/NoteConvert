import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Study App</h1>
      <nav>
        <ul>
          <li><Link to="/notes">Note Taking</Link></li>
          <li><Link to="/flashcards">Flashcards</Link></li>
          <li><Link to="/schedule">Study Schedule</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

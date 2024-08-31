import React, { useState, useEffect } from 'react';

function NoteTaking() {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('notes', notes);
    alert('Notes saved!');
  };

  return (
    <div>
      <h2>Take Notes</h2>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Type your notes here..."
      />
      <button onClick={handleSave}>Save Notes</button>
    </div>
  );
}

export default NoteTaking;

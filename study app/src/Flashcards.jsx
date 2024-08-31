import React, { useState, useEffect } from 'react';

function Flashcards() {
  const [flashcards, setFlashcards] = useState([{ question: '', answer: '' }]);

  useEffect(() => {
    const savedFlashcards = localStorage.getItem('flashcards');
    if (savedFlashcards) {
      setFlashcards(JSON.parse(savedFlashcards));
    }
  }, []);

  const addFlashcard = () => {
    setFlashcards([...flashcards, { question: '', answer: '' }]);
  };

  const handleChange = (index, field, value) => {
    const newFlashcards = [...flashcards];
    newFlashcards[index][field] = value;
    setFlashcards(newFlashcards);
  };

  const handleSave = () => {
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
    alert('Flashcards saved!');
  };

  return (
    <div>
      <h2>Flashcards</h2>
      {flashcards.map((card, index) => (
        <div key={index} className="flashcard">
          <input
            type="text"
            placeholder="Question"
            value={card.question}
            onChange={(e) => handleChange(index, 'question', e.target.value)}
          />
          <input
            type="text"
            placeholder="Answer"
            value={card.answer}
            onChange={(e) => handleChange(index, 'answer', e.target.value)}
          />
        </div>
      ))}
      <button onClick={addFlashcard}>Add Flashcard</button>
      <button onClick={handleSave}>Save Flashcards</button>
    </div>
  );
}

export default Flashcards;

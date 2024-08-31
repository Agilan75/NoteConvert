import React, { useState, useEffect } from 'react';

function StudySchedule() {
  const [schedule, setSchedule] = useState('');

  useEffect(() => {
    const savedSchedule = localStorage.getItem('schedule');
    if (savedSchedule) {
      setSchedule(savedSchedule);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('schedule', schedule);
    alert('Schedule saved!');
  };

  return (
    <div>
      <h2>Study Schedule</h2>
      <textarea
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
        placeholder="Plan your study time..."
      />
      <button onClick={handleSave}>Save Schedule</button>
    </div>
  );
}

export default StudySchedule;

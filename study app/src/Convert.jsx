import React, { useState } from 'react';

const Convert = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConvert = (e) => {
    e.preventDefault();
    // add the actual logic here
    console.log('Converting file:', file);
  };

  return (
    <div>
      <h2>Convert Your Media</h2>
      <form onSubmit={handleConvert}>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Convert</button>
      </form>
    </div>
  );
};

export default Convert;

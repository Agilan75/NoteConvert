import React, { useState } from 'react';

const Convert = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConvert = (e) => {
    e.preventDefault();
    console.log('Converting file:', file);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f7',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '600',
      color: '#1d1d1f',
      marginBottom: '20px',
    },
    form: {
      background: '#fff',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '100%',
      textAlign: 'center',
    },
    fileInput: {
      display: 'none',
    },
    fileInputLabel: {
      display: 'inline-block',
      fontSize: '1rem',
      color: '#353535',
      padding: '10px 20px',
      backgroundColor: '#f1f1f1',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    fileInputLabelHover: {
      backgroundColor: '#e0e0e0',
    },
    fileName: {
      marginTop: '10px',
      fontSize: '0.9rem',
      color: '#6e6e73',
      fontStyle: 'italic',
    },
    convertButton: {
      display: 'block',
      width: '100%',
      padding: '15px',
      fontSize: '1.2rem',
      fontWeight: '500',
      color: '#fff',
      backgroundColor: '#0071e3',
      border: 'none',
      borderRadius: '8px',
      marginTop: '20px',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
    },
    convertButtonHover: {
      backgroundColor: '#005bb5',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Convert Your Media</h1>
      <form style={styles.form} onSubmit={handleConvert}>
        <label
          htmlFor="fileInput"
          style={styles.fileInputLabel}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.fileInputLabelHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.fileInputLabel.backgroundColor)}
        >
          Choose File
        </label>
        <input id="fileInput" type="file" style={styles.fileInput} onChange={handleFileChange} />
        {file && <p style={styles.fileName}>Selected file: {file.name}</p>}
        <button
          type="submit"
          style={styles.convertButton}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.convertButtonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.convertButton.backgroundColor)}
        >
          Convert
        </button>
      </form>
    </div>
  );
};

export default Convert;

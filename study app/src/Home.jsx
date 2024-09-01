import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      backgroundColor: '#f7fafc',
      minHeight: '100vh',
    },
    header: {
      maxWidth: '64rem',
      margin: '0 auto',
      padding: '5rem 1rem',
      textAlign: 'center',
    },
    title: {
      fontSize: '3rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      color: '#1a202c',
    },
    description: {
      fontSize: '1.25rem',
      marginBottom: '3rem',
      color: '#4a5568',
    },
    actions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      fontSize: '1.125rem',
      fontWeight: 600,
      padding: '0.75rem 2rem',
      borderRadius: '9999px',
      transition: 'background-color 0.3s',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#1d4ed8',
    },
    link: {
      color: '#2563eb',
      textDecoration: 'none',
      transition: 'color 0.3s',
    },
    linkHover: {
      color: '#1d4ed8',
    },
    features: {
      backgroundColor: '#ffffff',
    },
    featuresContent: {
      maxWidth: '64rem',
      margin: '0 auto',
      padding: '5rem 1rem',
      textAlign: 'center',
    },
    featuresTitle: {
      fontSize: '1.875rem',
      fontWeight: 600,
      marginBottom: '3rem',
      color: '#1a202c',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(1, 1fr)',
      gap: '2rem',
    },
    gridMd: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    step: {
      textAlign: 'center',
    },
    iconContainer: {
      backgroundColor: '#ebf8ff',
      width: '4rem',
      height: '4rem',
      borderRadius: '9999px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem',
    },
    icon: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#2563eb',
    },
    stepTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
    },
    stepDescription: {
      color: '#718096',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome to NoteConvert</h1>
        <p style={styles.description}>
          Transform any lecture into detailed, organized notes automatically.
        </p>
        <div style={styles.actions}>
          <button
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
            onClick={() => navigate('/Convert')}
          >
            Get Started
          </button>
        </div>
      </div>
      <div style={styles.features}>
        <div style={styles.featuresContent}>
          <h2 style={styles.featuresTitle}>How It Works</h2>
          <div style={{ ...styles.grid, ...(window.innerWidth >= 768 ? styles.gridMd : {}) }}>
            {['Upload', 'Convert', 'Review'].map((step, index) => (
              <div key={step} style={styles.step}>
                <div style={styles.iconContainer}>
                  <span style={styles.icon}>{index + 1}</span>
                </div>
                <h3 style={styles.stepTitle}>{step}</h3>
                <p style={styles.stepDescription}>
                  {index === 0 && 'Upload your lecture recording or video.'}
                  {index === 1 && 'Our system converts speech into well-structured notes in seconds.'}
                  {index === 2 && 'Review, edit, and download your notes in your preferred format.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

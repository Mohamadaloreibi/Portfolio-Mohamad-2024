import React from 'react';
import styles from '../styles/FooterStyles.module.css';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f4', marginTop: '20px' }}>
      <p>2024 © Mohamad Al-oreibi | All rights reserved</p>
      <p>Powered by <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a></p>
    </footer>
  );
};

export default Footer;

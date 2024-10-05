import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // Importera huvudkomponenten App
import './index.css';     // Global CSS (om tillämpligt)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import '@react95/core/themes/win95.css';
import '@react95/core/GlobalStyle';
import App from './App.jsx'
import './assets/sass/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client'; // Update the import to 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <Router>
    <App />
  </Router>
);

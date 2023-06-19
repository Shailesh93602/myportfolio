import React from 'react';
import './App.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

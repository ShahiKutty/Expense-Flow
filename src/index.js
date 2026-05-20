import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { LanguageProvider } from './context/LanguageContext';

import App from './App';
import './styles/style.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <LanguageProvider>
    <App />
    <ToastContainer position="top-right" autoClose={2000} />
    </LanguageProvider>
  </BrowserRouter>
);
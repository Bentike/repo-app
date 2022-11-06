import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Error from './Component/Error';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <Error>
            <App />
          </Error>
        </HelmetProvider>
      </BrowserRouter>
  </React.StrictMode>
);
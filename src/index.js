import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DataContextProvider} from './context/dataContext';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() => {
root.render(
  // <StrictMode>
  <BrowserRouter>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </BrowserRouter>
  // </StrictMode>
);
// },1000);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/index.scss';
import { BrowserRouter } from 'react-router-dom';

const rootElem = document.getElementById('root') as HTMLFormElement;

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}

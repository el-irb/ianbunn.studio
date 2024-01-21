import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./App";
import Footer from "./components/footer/Footer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <App />
      <Footer />
  </React.StrictMode>
);

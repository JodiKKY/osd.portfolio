import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/layout.jsx';
// import { CartProvider } from './components/CartContext.jsx';
// import favicon from './assets/navbar.png'; 


// const setFavicon = (image) => {
//   let link = document.querySelector("link[rel~='icon']");
//   if (!link) {
//     link = document.createElement("link");
//     link.rel = "icon";
//     document.head.appendChild(link);
//   }
//   link.href = image;
// };

// setFavicon(favicon); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Layout>
          <App />
        </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

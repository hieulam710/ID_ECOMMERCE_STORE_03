import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CategoriesPage from './Pages/categoriesPage/CategoriesPage';
import LoginPage from './Pages/login-register/LoginPage';
import RegisterPage from './Pages/login-register/RegisterPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoriesPage/>
  </React.StrictMode>
);


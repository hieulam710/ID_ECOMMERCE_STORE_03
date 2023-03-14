import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CategoriesPage from './Pages/categoriesPage/CategoriesPage';
import CheckOutPage from './Pages/checkOutPage/CheckOutPage';
import LoginPage from './Pages/login-register/LoginPage';
import RegisterPage from './Pages/login-register/RegisterPage';
import ProductDetail from './Pages/productDetail/ProductDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CheckOutPage/>
  </React.StrictMode>
);


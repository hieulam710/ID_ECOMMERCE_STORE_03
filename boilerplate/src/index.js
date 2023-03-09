import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './components/loginPage/LoginPage';
import RegisterPage from './components/loginPage/RegisterPage';
import Test from './components/test';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegisterPage/>
  </React.StrictMode>
);


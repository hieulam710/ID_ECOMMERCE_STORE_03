import "./App.css"
import HomePage from "./Pages/homePage/HomePage";
import CategoriesPage from "./Pages/categoriesPage/CategoriesPage";
import ProductDetail from "./Pages/productDetail/ProductDetail";
import CheckOutPage from "./Pages/checkOutPage/CheckOutPage";
import RegisterPage from "./Pages/login-register/RegisterPage"
import LoginPage from "./Pages/login-register/LoginPage"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="categoriesPage" element={<CategoriesPage />} />
        <Route path="checkoutPage" element={<CheckOutPage />} />
        <Route path="productDetail" element={<ProductDetail />} />
      </Routes>

    </>);
}

export default App;

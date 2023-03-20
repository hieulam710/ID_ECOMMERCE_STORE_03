import "./Login.css";
import {
    InstagramOutlined, FacebookFilled, GooglePlusOutlined
}
    from '@ant-design/icons';
import Header from "../../components/header/Header";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate form
        const errors = {};
        if (!email ) {
            errors.email = 'Email is required';
        }
        if (!password) {
            errors.password = 'Password is required';
        }
        if (password.length < 6){
            errors.password = 'Password must be at least 6 characters '
        }
        setErrors(errors);
    }
    
    return (

        <>
            <div className="container">
                <Header />
                <div className="login-form-container container">
                    <div className="login-wrapper">
                        <div className="login-left">
                            <img src="/images/download.jpeg" width={"100%"} height={"100%"} alt="" />
                        </div>
                        <div className="login-right">
                            <div className="form-login">
                                <h1 className="login-title">Hello Again!</h1>
                                <span className="font-family-size24px">Already have an account? Please, login!</span>
                                <form className="form-btn" onSubmit={handleSubmit} >
                                    <div className="input--field">
                                        <label htmlFor="email">Email :</label>
                                        <img src="/images/User.png" className="icon-png icon--1" alt="" />
                                        <input type="text"
                                            id="email" value={email}
                                            name="email"
                                            onChange={(event) => setEmail(event.target.value)}
                                            placeholder="email@email.com" />
                                        {errors.email && <p className="error">{errors.email}</p>}
                                    </div>
                                    <div className="input--field">
                                        <label htmlFor="password">Password</label>
                                        <p className="icon--2">
                                            <img src="/images/Lock.png" className="icon-png " alt="" />
                                            <img src="/images/Eye.png" className="icon-2-right icon-png " alt="" />
                                        </p>
                                        <input type="text" id="password" name="password"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            placeholder="password" />
                                        {errors.password && <p className="error">{errors.password}</p>}

                                    </div>
                                    <button className="login-logout-btn">Login</button>
                                </form>
                                <div className="login-with">
                                    <span> Login with: </span>
                                    <GooglePlusOutlined />
                                    <FacebookFilled />
                                    <InstagramOutlined />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>);
}

export default LoginPage;
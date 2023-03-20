import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Login.css"
import React, { useState } from 'react';
import axios from 'axios';


function RegisterPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const handleChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        // Validate form data
        const errors = {};

        if (!formData.email) {
            errors.email = 'Vui lòng nhập địa chỉ email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Địa chỉ email không hợp lệ';
        }
        if (!formData.password) {
            errors.password = 'Vui lòng nhập mật khẩu';
        } else if (formData.password.length < 8) {
            errors.password = 'Mật khẩu phải chứa ít nhất 8 kí tự';
        }
        if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = 'Mật khẩu nhập lại không khớp';
        }
        setErrors(errors);

        // Submit form data
        if (Object.keys(errors).length === 0) {
            setSubmitting(true);
            axios.post('/api/register', formData)
                .then(response => {
                    console.log(response.data); // Xử lý kết quả trả về từ backend
                })
                .catch(error => {
                    console.error(error); // Xử lý lỗi khi gửi request lên backend
                })
                .finally(() => {
                    setSubmitting(false);
                });
        }
    };
    return (<>
        <div className="container">
            <Header />
            <div className="login-form-container">
                <div className="login-wrapper">
                    <div className="login-left">
                        <img src="/images/download.jpeg" width={"100%"} height={"100%"} alt="" />
                    </div>
                    <div className="login-right">
                        <div className="form-login">
                            <h1 className="login-title">Create Account</h1>
                            <span className="font-family-size24px">Don't have an account yet? Register here!</span>
                            <form className="form-btn" onSubmit={handleSubmit} >
                                <div className="input--field">
                                    <label htmlFor="email">Email</label>
                                    <img src="/images/User.png" className="icon-png icon--1" alt="" />
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@email.com" />
                                    {errors.email && <p className="error">{errors.email}</p>}
                                </div>
                                <div className="input--field">
                                    <label htmlFor="password">Password</label>
                                    <div className="icon--2">
                                        <img src="/images/Lock.png" className="icon-png " alt="" />
                                        <img src="/images/Eye.png" className="icon-png icon-2-right" alt="" /></div>
                                    <input type="text" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" />
                                    {errors.password && <p className="error">{errors.password}</p>}
                                </div>
                                <div className="input--field">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <div className="icon--2">
                                        <img src="/images/Lock.png" className="icon-png " alt="" />
                                        <img src="/images/Eye.png" className="icon-png icon-2-right" alt="" /></div>
                                    <input type="text" id="confirmPassword" name="confirmPassword"
                                        value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
                                    {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
                                </div>
                                <button className="login-logout-btn">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>);
}

export default RegisterPage;
import "./Login.css"

function RegisterPage() {
    return (<>
        <div className="login-form-container">
            <div className="login-wrapper">
                <div className="login-left">
                    <img src="/images/download.jpeg" width={"100%"} height={"100%"} alt="" />
                </div>
                <div className="login-right">
                    <div className="form-login">
                        <h1 className="login-title">Create Account</h1>
                        <span className="font-family-size24px">Don't have an account yet? Register here!</span>
                        <form className="form-btn" >
                            <div className="input--field">
                                <label htmlFor="email">Email</label>
                                <img src="/images/User.png" className="icon-png icon--1" alt="" />
                                <input type="text" id="email" name="email" placeholder="email@email.com" />
                                <p className="error">error</p>
                            </div>
                            <div className="input--field">
                                <label htmlFor="password">Password</label>
                                <div className="icon--2">
                                    <img src="/images/Lock.png" className="icon-png " alt="" />
                                    <img src="/images/Eye.png" className="icon-png " alt="" /></div>
                                <input type="text" id="password" name="password" placeholder="password" />
                                <p className="error">error</p>
                            </div>
                            <div className="input--field">
                                <label htmlFor="password">Confirm Password</label>
                                <div className="icon--2">
                                    <img src="/images/Lock.png" className="icon-png " alt="" />
                                    <img src="/images/Eye.png" className="icon-png " alt="" /></div>
                                <input type="text" id="password" name="password" placeholder="Confirm password" />
                                <p className="error">error</p>
                            </div>
                            <button className="login-logout-btn">Register</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default RegisterPage;
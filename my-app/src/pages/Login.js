
import React from "react";
import './Login.css';
function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Welcome to CampusClicks!</h2>
                <form action="#" method="POST" className="login-form">
                    <input type="text" name="username" placeholder="Username" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit" className="login-btn">Log In</button>
                </form>
                <p className="signup-prompt">Don't have an account? <a href="#">Sign up</a></p>
            </div>
        </div>
    );
}

export default Login;

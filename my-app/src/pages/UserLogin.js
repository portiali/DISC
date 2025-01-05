import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import "./Login.css";

function UserLogin() {
    const {token, setToken, userId, setUserId } = useAuth();
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [hasNavigated, setHasNavigated] = useState(false);

    useEffect(()=>{
        console.log("Token state updated:", token);
        if (token && !hasNavigated){
            setTimeout(() => navigate("/home"), 100);
            setHasNavigated(true);
            navigate("/home");
        }
    }, [token, navigate, hasNavigated]);

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get("access_token");

        if (accessToken) {
            setToken(accessToken);
            window.history.replaceState(null, "", window.location.pathname);
        }
        if (token && !hasNavigated) {
            setTimeout(() => navigate("/home"), 100);
            setHasNavigated(true);
            navigate("/home");
        }
    },[setToken, navigate, hasNavigated, token]);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3003/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error);

            setToken(data.session.access_token);
            setUserId(data.session.user.id);
            setError("");
            if (token && !hasNavigated) {
                setTimeout(() => navigate("/home"), 100);
                setHasNavigated(true);
                navigate("/home");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            
            const response = await fetch("http://localhost:3003/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error);

            setError("Registration successful! Please sign in.");

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className = "user-login-container" style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
            <h1>welcome to   <span className="bold-c">c</span>ampus<span className="bold-c">c</span>licks!</h1>

            {error && (
                <div
                    style={{
                        color: error.includes("successful") ? "green" : "red",
                        margin: "10px 0",
                        padding: "10px",
                        backgroundColor: error.includes("successful")
                            ? "#e8f5e9"
                            : "#ffebee",
                    }}
                >
                    {error}
                </div>
            )}

            {!token && (
                <div className = "login-container">
                    <h2>login</h2>
                    <form
                        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ padding: "8px" }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ padding: "8px" }}
                        />
                        <div className="user-login-button-container"  style={{ display: "flex", gap: "10px" }}>
                            <button className="user-login-button"
                                onClick={handleSignIn}
                                style={{ padding: "10px 20px", flex: 1 }}
                            >
                                sign in
                            </button>
                        <button className="user-login-button"
                                onClick={handleSignUp}
                                style={{ padding: "10px 20px", flex: 1 }}
                            >
                                sign up
                            </button>
                        </div>
                    </form>
                </div>

            )}
        </div>
    );
}

export default UserLogin;
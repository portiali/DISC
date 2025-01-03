
import React from "react";
import UserLogin from "./UserLogin";
import './Login.css';
import { useState } from "react";
import { useParams, useNavigate, } from "react-router-dom";
import { createUser} from "../api/users";

function Login() {
    // const { id } = useParams();
    // const navigate = useNavigate();
    // const [firstName, setFirstName] = useState("");
    // const [email, setEmail] = useState("");
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState("");

    //     const handleSubmit = async (e) => {
    //         e.preventDefault();
    //         setLoading(true);
    //         try {
    //             const formData = new FormData();
    //             formData.append("first_name", firstName);
    //             formData.append("email", email);
    //             //  formData.append("bio", bio);
    //             const response = await createUser(formData);
    //             console.log("Response:", response);
    //             navigate("/home");
    //         } catch (err){
    //             console.log('err saving user', err.message);
    //             setError("Failed to save user");  
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    return (
        // <div className="login-container">
        //     <div className="login-box">
        //         <h2>Welcome to CampusClicks!</h2>
        //         <form onSubmit = {handleSubmit} className="login-form">
        //             <input type="text" 
        //             name="username" 
        //             placeholder="Firstname" 
        //             onChange={(e) => setFirstName(e.target.value)}
        //             required />
        //             <input 
        //             type="email" 
        //             name="email" 
        //             placeholder="Email" 
        //             onChange={(e) => setEmail(e.target.value)}
        //             required />
        //             {/* <input type="password" name="password" placeholder="Password" required /> */}
        //             <button type="submit" className="login-btn">Log In</button>
        //         </form>
        //         <p className="signup-prompt">Don't have an account? <a href="#">Sign up</a></p>
        //     </div>
        // </div>
        <UserLogin/>
    );
}

export default Login;

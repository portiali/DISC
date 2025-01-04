
import { useAuth } from "../hooks/AuthContext.js"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "./Gallery.css"

function SignOut(){
    const { token, setToken } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {

        if (!token) {
            navigate("/"); // Redirect to the login page if no token exists
        }
    }, [token, navigate]);

    const handleSignOut = () => {
        setToken(null);
        navigate("/");
        console.log("token state set to null", token);
    };

    console.log(token);
    return (
        <div className="SignOut">
            <button onClick={handleSignOut}> sign out</button>
        </div>
    );
}

export default SignOut;
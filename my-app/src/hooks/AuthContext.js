import React, { createContext, useState, useEffect, useContext } from "react";

// Create a Context for authentication
const AuthContext = createContext();




export const AuthProvider = ({ children }) => {
    // const [token, setToken] = useState(null); // Token state
    // const [userId, setUserId] = useState(null);
    const [token, setToken] = useState(() => {
        // Retrieve token from localStorage if it exists
        return localStorage.getItem("token") || null;
    });
    const [userId, setUserId] = useState(() => {
        // Retrieve userId from localStorage if it exists
        return localStorage.getItem("userId") || null;
    });

    useEffect(() => {
        if (token) {
            // Store the token in localStorage whenever it changes
            localStorage.setItem("token", token);
        } else {
            // If no token, clear it from localStorage
            localStorage.removeItem("token");
        }

        if (userId) {
            // Store the userId in localStorage whenever it changes
            localStorage.setItem("userId", userId);
        } else {
            // If no userId, clear it from localStorage
            localStorage.removeItem("userId");
        }
    }, [token, userId]);


    return (
        <AuthContext.Provider value={{ token, setToken, userId, setUserId}}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a custom hook to access the context
export const useAuth = () => {
    return useContext(AuthContext);
};

import React, { createContext, useState, useContext } from "react";

// Create a Context for authentication
const AuthContext = createContext();

// Create a custom hook to access the context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(""); // Token state

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

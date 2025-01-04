import React, { createContext, useState, useContext } from "react";

// Create a Context for authentication
const AuthContext = createContext();




export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null); // Token state
    const [userId, setUserId] = useState(null);

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

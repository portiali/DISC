import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => {
        return localStorage.getItem("token") || null;
    });
    const [userId, setUserId] = useState(() => {
        return localStorage.getItem("userId") || null;
    });

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }

        if (userId) {
            localStorage.setItem("userId", userId);
        } else {
            localStorage.removeItem("userId");
        }
    }, [token, userId]);


    return (
        <AuthContext.Provider value={{ token, setToken, userId, setUserId}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

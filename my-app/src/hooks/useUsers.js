import React, { useState, useEffect } from "react";
import { getAllUsers } from "../api/users";
import { useAuth } from "./AuthContext";

function useUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const {token, setToken} = useAuth();

    useEffect(() => {
        loadUsers(token);
    }, [token]);

    const loadUsers = async (token) => {
        try {
            const data = await getAllUsers(token);
            console.log(data);
            setUsers(data);
        } catch (err) {
            setError("Failed to load users");
        } finally {
            setIsLoading(false);
        }
    };
    return [users, isLoading, error, setUsers, setError]

}

export default useUsers
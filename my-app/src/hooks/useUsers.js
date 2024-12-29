import React, { useState, useEffect } from "react";
import { getAllUsers } from "../api/users";

function useUsers() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const data = await getAllUsers();
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
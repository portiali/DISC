import React, { useState, useEffect } from "react";
import { getAllUsers, deleteUser } from "../api/users";
import "./Users.css"
import UserCard from "../components/UserCard";

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
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
        } finally{
            setLoading(false);
        }
    };

    const handleDeleteUser = async (id) =>{
        try {
            await deleteUser(id);
            setUsers(users.filter((u)=>u.id != id));
            setError(null);
        } catch (err){
            setError("Failed to delete user");
        }
    };

    if (loading) {
        return (
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading user details...</p>
            </div>
        )
    }
    return (
        <div>
            <h1 className="title"> Current Users: </h1>
            <div className="users-grid">
                {users.map((user) => (
                    <UserCard 
                    key ={user.id} 
                    user = {user}
                    onDelete={handleDeleteUser}
                    onEdit = {()=>{}}
                    />
                ))}
            </div>
        </div>
    )
}
import React, { useState, useEffect, useMemo } from "react";
import { getAllUsers, deleteUser } from "../api/users";
import "./Users.css"
import UserCard from "../components/UserCard";
import useUsers from "../hooks/useUsers";

//page is not actually used-- was part of previous assignments
export const UserList = () => {

    const [users, isLoading, error, setUsers, setError]= useUsers();
    console.log(users);
    const [order, setOrder] = useState("");
    

    const handleDeleteUser = async (id) =>{
        try {
            await deleteUser(id);
            setUsers(users.filter((u)=>u.id != id));
            setError(null);
        } catch (err){
            setError("Failed to delete user");
        }
    };

    const handleChange = (e) =>{
        setOrder(e.target.value);
    };

    const handleSort = (users, order) => {
        console.log('running sort....');
        if(order=="a-z"){
            return [...users].sort((user1,user2)=>{
               return user1.email.localeCompare(user2.email);
            });
        } else if (order == "z-a"){
            return [...users].sort((user1,user2)=>{
                return user2.email.localeCompare(user1.email);
             });
        } else {
            return users;
        }
        


        };
    
    const sortedUsers = useMemo(()=>(handleSort(users, order)), [users,order]);

    
    console.log('sorted users', sortedUsers);

    if (isLoading) {
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
            <select className = "order" onChange={handleChange} placeholder="Sort">
                <option selected disabled value="">Sort users</option>
                <option value="a-z">
                    A-Z
                </option>
                <option value = "z-a">
                    Z-A
                </option>
            </select>
            
            
            <div className="users-grid">
                {sortedUsers.map((user) => (
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

export default UserList;
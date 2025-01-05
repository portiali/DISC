
import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";


function UserCard({ user, onDelete, onEdit }) {
    const navigate = useNavigate();
    const handleCardClick = (e) =>{
        if ((e.target).closest(".button-group")){
            return;
        }
        navigate(`/users/${user.id}`);

    };

    const handlDelete = (e) => {
        e.stopPropagation();
        onDelete(user.id);
    };

    const handleEdit = (e) => {
        e.stopPropagation();
        onEdit(user);
    };

    return (
        <div className="user-content" key={user.id}>
            <h3 className="user-name">{user.firstname || "No first name"} {user.lastname || "No last name"}</h3>
            <p className="user-email">{user.email || "No email"}</p>
            <p className="user-bio">{user.bio || "No bio"}</p>
            <p className="user-major">{user.major || "No major"}</p>
            <p className="user-graduationYear">{user.graduationyear || "No grad year"}</p>
            <p className="user-profilePicture">{user.profilePicture ? (
                <img src={user.profilePicture} alt={`${user.firstname}'s profile`} />
            ) : (
                "No profile pic"
            )}</p>
            <p className="user-created-at">{user.created_at}</p>
            <div className = "button group">
                <button onClick = {handleEdit} className = "button button-secondary">
                    Edit
                </button>
                <button onClick = {handlDelete} className = "button button-danger">
                    Delete
                </button>
            </div>
        </div>
    );
}
export default UserCard;


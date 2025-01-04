import { useState, useEffect } from "react";
import { useParams, useNavigate, } from "react-router-dom";
import { createUser, getUserByID, updateUser } from "../api/users";
import Input from "../components/Input";
import "./Users.css"
import NavBar from "../components/NavBar";
import SignOut from "../components/SignOut";
import { useAuth } from "../hooks/AuthContext";
import useUsers from "../hooks/useUsers";

export const UserForm = () => {
    const { token, setToken, userId, setUserId } = useAuth();
    const [users, isLoading, error, setUsers, setError] = useUsers();
    const { id } = useParams();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [profilePic, setProfilePic] = useState("");
    //const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    //use useUsers!!!!

    useEffect(() => {
        if (userId) {
            loadUser(userId);
        }
    }, [userId]);

    const loadUser = async (id) => {
        try {
            const user = await getUserByID(id);
            setFirstName(user.first_name);
            setEmail(user.email);
            setBio(user.user_profiles.bio);
        } catch (err) {
            setError("Failed to load user");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("first_name", firstName);
            formData.append("email", email);
            formData.append("bio", bio);
            formData.append("profile_picture", "temp pic");
            console.log("ID HERE", id);
            if (profilePic) {
                formData.append("profilepicture", profilePic);
            }
            console.log('FORM DATA HERE', formData);
            for (let [key, value] of formData.entries()) {
                console.log(`${key}:`, value);
            }

            if (id) {
                const response = await updateUser({id, formData});
                console.log("Response:", response);
            } else {
                const response = await createUser(formData);
                console.log("Response:", response);
            }
            navigate(`/users/${id}/edit`, { replace: true });
        } catch (err) {
            console.log('err saving user', err.message);
            setError("Failed to save user");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <NavBar />
            <SignOut />
            <div className="form-container">

                <h1 className="title">
                    {id ? "edit user" : "create user"}
                </h1>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstname" className="form-label">
                            first name
                        </label>

                        <Input id="firstname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            email
                        </label>
                        <Input id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio" className="form-label">
                            bio
                        </label>
                        <Input id='bio'
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="profilepic" className="form-label">
                            profile picture
                        </label>
                        <input id="profile-pic"
                            className="input"
                            type="file"
                            accept="image/*"
                            onChange={(e) => setProfilePic(e.target.files?.[0] || null)}
                            required={!id}
                        />
                    </div>
                    <div className="button-group">
                        <button
                            type="submit"
                            disabled={loading}
                            className="button button-primary"
                        >
                            {loading ? "Saving..." : id ? "Update" : "Create"}
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            className="button button-secondary"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default UserForm;
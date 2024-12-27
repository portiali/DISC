import { useState, useEffect } from "react";
import { useParams, useNavigate, } from "react-router-dom";
import { createUser, getUserByID, updateUser } from "../api/users";
import "./Users.css"

export const UserForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [major, setMajor] = useState("");
    const [graduationYear, setGradYear] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [error, setError] = useState(null);
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        if (id) {
            loadUser(id);
        }
    }, [id]);

    const loadUser = async (userId) => {
        try {
            const user = await getUserByID(userId);
            setFirstName(user.firstname);
            setLastName(user.lastname);
            setEmail(user.email);
            setBio(user.bio);
            setMajor(user.major);
            setGradYear(user.graduationyear);
        } catch (err) {
            setError("Failed to load user");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("firstname", firstName);
            formData.append("lastname", lastName);
            formData.append("email", email);
            formData.append("bio", bio);
            formData.append("major", major);
            formData.append("graduationyear", graduationYear);
            if (profilePic) {
                formData.append("profilepicture", profilePic);
            }
            console.log('form data', formData);
            console.log(formData.get('profilepicture'));
            console.log(formData.get('firstname'));
            console.log(formData.get('lastname'));
            console.log(formData.get('email'));
            console.log(formData.get('bio'));
            console.log(formData.get('major'));
            console.log(formData.get('graduationyear'));
            if (id) {
                const response = await updateUser(id, formData);
                console.log("Response:", response);
            } else {
                const response = await createUser(formData);
                console.log("Response:", response);
            }
            navigate("/");
        } catch (err){
            console.log('err saving user', err.message);
            setError("Failed to save user");  
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className = "form-container">
            <h1 className = "title">
                {id? "Edit User": "Create User"}
            </h1>
            {error && <div className = "error-message">{error}</div>}
            <form onSubmit = {handleSubmit}>
                <div className = "form-group">
                    <label htmlFor="firstname" className = "form-label">
                        First Name
                    </label>
                    <input id = "firstname" 
                    className = "input" 
                    value = {firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required 
                    />
                </div>
                <div className = "form-group">
                    <label htmlFor="lastname" className = "form-label">
                        Last Name
                    </label>
                    <input id = "lastname" 
                    className = "input" 
                    value = {lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required 
                    />
                </div>
                <div className = "form-group">
                    <label htmlFor="email" className = "form-label">
                        Email
                    </label>
                    <input id = "email" 
                    className = "input" 
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    />
                </div>
                <div className = "form-group">
                    <label htmlFor="bio" className = "form-label">
                        Bio
                    </label>
                    <input id = "bio" 
                    className = "input" 
                    value = {bio}
                    onChange={(e) => setBio(e.target.value)}
                    required 
                    />
                </div>
                <div className = "form-group">
                    <label htmlFor="major" className = "form-label">
                        Major
                    </label>
                    <input id = "major" 
                    className = "input" 
                    value = {major}
                    onChange={(e) => setMajor(e.target.value)}
                    required 
                    />
                </div>
                <div className = "form-group">
                    <label htmlFor="graduationyear" className = "form-label">
                        Graduation Year
                    </label>
                    <input id = "gradYear" 
                    className = "input" 
                    value = {graduationYear}
                    onChange={(e) => setGradYear(e.target.value)}
                    required 
                    />
                </div>
             
                 <div className = "form-group">
                    <label htmlFor="profilepic" className = "form-label">
                        Profile Picture
                    </label>
                    <input id = "profile-pic" 
                    className = "input" 
                    type = "file"
                    accept = "image/*"
                    onChange={(e) => setProfilePic(e.target.files?.[0] || null)}
                    required = {!id}
                    />
                </div>
                <div className = "button-group">
                    <button 
                    type = "submit"
                    disabled = {loading}
                    className = "button button-primary"
                    >
                        {loading? "Saving...": id? "Update": "Create"}
                    </button>
                    <button
                    type = "button"
                    onClick = {() => navigate("/")}
                    className = "button button-secondary"
                    >
                        Cancel
                    </button>
                </div>        
            </form>
        </div>

    );
};
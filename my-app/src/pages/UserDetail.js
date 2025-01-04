import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getUserByID } from "../api/users";
import UserCard from "../components/UserCard";
import { useAuth } from "../hooks/AuthContext";

function UserDetail() {
    const {token, setToken} = useAuth();
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            loadUser(id);
        }

    }, [id]);

    const loadUser = async (id) => {
        try {
            const data = await getUserByID(id, token);
            setUser(data);
        } catch (err) {
            setError("Failed to load user");
        } finally {
            setLoading(false);
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

    if (error) {
        return (
            <div className="error-container">
                <div classNmae="error-message">{error}</div>
                <Link to="/" className="button button-primary">
                    Back to users
                </Link>
            </div>
        );
    }
    if (!user) {
        return (
            <div className="error-container">
                <div className="error-message">{error}</div>
                <Link to="/" className="button button-primary">
                    Back to users
                </Link>
            </div>
        );
    }

    return (
        <div className="user-detail">
            <div className="user-detail-header">
                <Link to="/users" className="back-link">
                    ← Back to Users
                </Link>
            </div>
            <div className="user-detail-content">
                <div className = "user-detail-image-container">
                <UserCard key ={user.id} user = {user}/>
                </div>
            </div>
        </div>

    );


}
export default UserDetail;


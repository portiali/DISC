import NavBar from '../components/NavBar.js';
import GalleryNew from '../components/GalleryNew.js';
import { useAuth } from "../hooks/AuthContext.js"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SignOut from '../components/SignOut.js';


function Upload() {
    return (
        <div>
            <NavBar />
            <SignOut />
            <h1>coming soon...!</h1>
        </div>
    );
}

export default Upload;

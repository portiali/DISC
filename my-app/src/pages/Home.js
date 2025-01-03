import NavBar from '../components/NavBar.js';
import Gallery from '../components/Gallery.js';
import {useAuth} from "../components/AuthContext.js"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  const {token, setToken} = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    
    if (!token) {
      navigate("/"); // Redirect to the login page if no token exists
    }
  }, [token, navigate]);

  const handleSignOut = () => {
    setToken(null);
    navigate("/");
    console.log("token state set to null", token);
  };

  console.log(token);
  return (
    <div className="Home">
      <NavBar/>
      <Gallery/>
      <button onClick = {handleSignOut}> Sign Out</button>
    </div>
  );
}

export default Home;

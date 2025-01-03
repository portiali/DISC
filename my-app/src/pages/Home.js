import NavBar from '../components/NavBar.js';
import Gallery from '../components/Gallery.js';
import {useAuth} from "../components/AuthContext.js"
import { useNavigate } from 'react-router-dom';

function Home() {
  const {token, setToken} = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    setToken("");
    navigate("/login");
  };

  return (
    <div className="Home">
      <NavBar/>
      <Gallery/>
      <button onClick = {handleSignOut}> Sign Out</button>
    </div>
  );
}

export default Home;

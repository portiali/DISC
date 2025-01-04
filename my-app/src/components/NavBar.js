import './NavBar.css'
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
    const [count, setCount] = useState(1)
    const addCount = () => {
        setCount(count + 1);
    }
    return (
        <nav>
            <ul>
                <li>
                    <span className="bold-c">c</span>ampus<span className="bold-c">c</span>licks
                </li>
                {/* <li>
                    campusclicks</li> */}
                <li><i class="fa-solid fa-house"></i>
                    <Link to = "/home">home</Link></li>
                <li><i class="fa-regular fa-square-plus"></i><Link>create</Link></li>
                <li><i class="fa-solid fa-medal"></i><Link>leaderboard</Link></li>
                <li><i class="fa-solid fa-users"></i><Link to="/users/all">all profiles</Link></li>
                <li><i class="fa-regular fa-user"></i><Link>my profile</Link></li>

            </ul>

        </nav>
    )
}

export default NavBar;
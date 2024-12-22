import './NavBar.css'

import { useState } from "react";

function NavBar() {
    const [count, setCount] = useState(1)
    const addCount = () => {
        setCount(count+1);
    }
    return (
        <nav>
            <ul>
                <li>CampusClicks</li>
                <li><a>Home</a></li>
                <li><a>Create</a></li>
                <li><a>Leaderboard</a></li>
                <li>  <p>Count: {count}</p></li>
                <li><button onClick={addCount}>Increment</button></li>
            </ul>

        </nav>
    )
}

export default NavBar;
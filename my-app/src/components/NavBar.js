import './NavBar.css'

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
                    CampusClicks</li>
                <li><i class="fa-solid fa-house"></i>
                    <a>Home</a></li>
                <li><i class="fa-regular fa-square-plus"></i><a>Create</a></li>
                <li><i class="fa-solid fa-medal"></i><a>Leaderboard</a></li>
                <li><i class="fa-solid fa-comment-dots"></i><a>Messages</a></li>
                {/* <li>  <p>Count: {count}</p></li>
                <li><button onClick={addCount}>Increment</button></li> */}
            </ul>

        </nav>
    )
}

export default NavBar;
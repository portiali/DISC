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
                    <span className="bold-c">c</span>ampus<span className="bold-c">c</span>licks
                </li>
                {/* <li>
                    campusclicks</li> */}
                <li><i class="fa-solid fa-house"></i>
                    <a>home</a></li>
                <li><i class="fa-regular fa-square-plus"></i><a>create</a></li>
                <li><i class="fa-solid fa-medal"></i><a>leaderboard</a></li>
                <li><i class="fa-solid fa-comment-dots"></i><a>messages</a></li>
                {/* <li>  <p>Count: {count}</p></li>
                <li><button onClick={addCount}>Increment</button></li> */}
            </ul>

        </nav>
    )
}

export default NavBar;
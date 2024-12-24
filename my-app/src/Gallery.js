// import React, { useState, useEffect } from "react";
// import './Gallery.css'
import winter from './images/winter.jpg'
import squirrel from './images/squirrel.jpg'
import joe from './images/joe.jpeg'
import willie from './images/willie.jpeg'

// function Gallery() {
//     // const [liked, setLiked] = useState(false);
//     const [likedPosts, setLiked] = useState({});
//     const 
//     // const handleLikeClick = () => {
//     //    setLiked(!liked);
//     // };

//     const handleLikeClick = () => {
//         setLiked((prev)=>{...prev, [postID]:!prev[postID]
//         });
//     };

//     return (
//         <div className="post-container">

//             <div className="post">
//                 <p className="img-title"> "Wonderful Winter"  by user123 </p>
//                 <img src={winter} alt="Northwestern in the Winter" />
//                 <div
//                     className={`heart-icon${likedPosts ? "liked" : ""}`}
//                     onClick={(handleLikeClick('winter'))}
//                 >
//                     <i class="fa-regular fa-heart"></i>
//                 </div>
//             </div>

//             <div className="post">
//                 <p className="img-title"> "The Icon"  by purplePenguin35 </p>
//                 <img src={joe} alt="Joseph Hummel Photo" />
//                 <div
//                     className={`heart-icon${liked ? "liked" : ""}`}
//                     onClick={(handleLikeClick('joe'))}
//                 >
//                     <i class="fa-regular fa-heart"></i>
//                 </div>
//             </div>

//             <div className="post">
//                 <p className="img-title"> "Willie Always Wins"  by user12039 </p>
//                 <img src={willie} alt="Willie the Wildcat" />
//                 <div
//                     className={`heart-icon${liked ? "liked" : ""}`}
//                     onClick={(handleLikeClick('willie'))}
//                 >
//                     <i class="fa-regular fa-heart"></i>
//                 </div>
//             </div>

//             <div className="post">
//                 <p className="img-title"> "Typical Squirrel"  by JohnSmith_445</p>
//                 <img src={squirrel} alt="Northwestern Squirrel" />
//                 <div
//                     className={`heart-icon${liked ? "liked" : ""}`}
//                     onClick={(handleLikeClick('squirrel'))}
//                 >
//                     <i class="fa-regular fa-heart"></i>
//                 </div>
//             </div>

//         </div >
//     )
// }

// export default Gallery;

import React, { useState } from "react";
import './Gallery.css';

// // Example function to simulate fetching dynamic posts (could be from an API)
// const fetchPosts = () => {
//   return [
//     { id: "winter", title: "Wonderful Winter", imgUrl: winter, liked: false },
//     { id: "joe", title: "The Icon", imgUrl: joe, liked: false },
//     { id: "willie", title: "Willie Always Wins", imgUrl: willie, liked: false },
//     { id: "squirrel", title: "Typical Squirrel", imgUrl: squirrel, liked: false }
//   ];
// };

function Gallery() {
    const [posts, setPosts] = useState([
        { id: "winter", title: "Wonderful Winter", imgUrl: winter, liked: false },
        { id: "joe", title: "The Icon", imgUrl: joe, liked: false },
        { id: "willie", title: "Willie Always Wins", imgUrl: willie, liked: false },
        { id: "squirrel", title: "Typical Squirrel", imgUrl: squirrel, liked: false }
      ]); // Initialize posts dynamically

    // Handle the like button click
    const handleLikeClick = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? { ...post, liked: !post.liked } // Toggle the liked status
                    : post // Keep other posts unchanged
            )
        );
    };

    return (
        <div className="post-container">
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <p className="img-title">"{post.title}" by user123</p>
                    <img src={post.imgUrl} alt={post.title} />
                    <div
                        className={`heart-icon${post.liked ? "liked" : ""}`}
                        onClick={() => handleLikeClick(post.id)}
                    >
                        <i className="fa-regular fa-heart"></i>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Gallery;

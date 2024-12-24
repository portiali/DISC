import React, { useState, useEffect } from "react";
import winter from './images/winter.jpg'
import squirrel from './images/squirrel.jpg'
import joe from './images/joe.jpeg'
import willie from './images/willie.jpeg'
import './Gallery.css';
function Gallery() {
    const [posts, setPosts] = useState([
        { id: "winter", title: "Wonderful Winter", imgUrl: winter, liked: false, user: "billy" },
        { id: "joe", title: "The Icon", imgUrl: joe, liked: false, user: "bob" },
        { id: "willie", title: "Willie Always Wins", imgUrl: willie, liked: false, user: "joe" },
        { id: "squirrel", title: "Typical Squirrel", imgUrl: squirrel, liked: false, user: "greg" }
    ]);

    const handleLikeClick = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId
                    ? { ...post, liked: !post.liked }
                    : post
            )
        );
    };

    useEffect(() => {
        console.log("new post liked or unliked")
    }, [posts.filter(post => post.liked)]);

    return (
        <div className="post-container">
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <p className="img-title">"{post.title}" by {post.user}</p>
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

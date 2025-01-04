import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/AuthContext';
import './Gallery.css'

function GalleryNew() {
    const {token, setToken, userId, setUserId } = useAuth();
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [likedImages, setLikedImages] = useState(new Set());
    const imagesPerPage = 4;


    useEffect(() => {
        // Fetch images
        const fetchImages = async () => {
            try {
                const response = await fetch('http://localhost:3003/users/images'); 
                const data = await response.json();
                setImages(data);

                // Check which images the user has liked
                // const likedResponse = await fetch(`http://localhost:3003/users/liked?userId=${userId}`);
                // const likedData = await likedResponse.json();
                // const likedSet = new Set(likedData.map((like) => like.image_id));
                // setLikedImages(likedSet);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchImages();
    }, [userId]);

    const handleLikeClick = async (imageId) => {
        try {
            const response = await fetch('http://localhost:3003/users/like', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, imageId }),
            });
            const { liked } = await response.json();

            // Update the liked images in state
            if (liked) {
                setLikedImages((prevLikes) => new Set(prevLikes.add(imageId)));
            } else {
                setLikedImages((prevLikes) => {
                    const updatedLikes = new Set(prevLikes);
                    updatedLikes.delete(imageId);
                    return updatedLikes;
                });
            }
        } catch (error) {
            console.error("Error liking the image:", error);
        }
    };

    // Pagination logic
    const startIndex = currentPage * imagesPerPage;
    const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

    const goToNextPage = () => {
        if ((currentPage + 1) * imagesPerPage < images.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="gallery-container">
            {currentImages.map((image) => (
                <div key={image.img_id} className="image-item">
                    <h3>{image.title}</h3>
                    <img src={`/images/${image.filename}`} alt={image.title} />
                    <div
                        className={`heart-icon ${likedImages.has(image.img_id) ? "liked" : ""}`}
                        onClick={() => handleLikeClick(image.img_id)}
                    >
                        <i className="fa-regular fa-heart"></i>
                    </div>
                </div>
            ))}
            <div className="pagination">
                <button onClick={goToPreviousPage} disabled={currentPage === 0}>
                    back
                </button>
                <button
                    onClick={goToNextPage}
                    disabled={(currentPage + 1) * imagesPerPage >= images.length}
                >
                    next
                </button>
            </div>
        </div>
    );
}

export default GalleryNew;

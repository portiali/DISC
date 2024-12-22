import './Gallery.css'
import winter from './images/winter.jpg'
import squirrel from './images/squirrel.jpg'
import joe from './images/joe.jpeg'
import willie from './images/willie.jpeg'

function Gallery() {
    return (
        <div className="post-container">
            <div className="post">
                <p className="img-title"> "Wonderful Winter"  by user123 </p>
                <img src={winter} alt="Northwestern in the Winter" />
            </div>
            <div className="post">
                <p className="img-title"> "The Icon"  by purplePenguin35 </p>
                <img src={joe} alt="Joseph Hummel Photo" />
            </div>

            <div className="post">
                <p className="img-title"> "Willie Always Wins"  by user12039 </p>
                <img src={willie} alt="Willie the Wildcat" />
            </div>

            <div className="post">
                <p className="img-title"> "Typical Squirrel"  by JohnSmith_445</p>
                <img src={squirrel} alt="Northwestern Squirrel" />
            </div>

        </div>
    )
}

export default Gallery;
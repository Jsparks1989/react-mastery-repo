import React from 'react';
import './VideoItem.css';



const VideoItem = ({ video }) => {
    return(
        <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url}></img>
            <div className="content">
                {video.snippet.title}
            </div>
        </div>
    );
}





export default VideoItem;
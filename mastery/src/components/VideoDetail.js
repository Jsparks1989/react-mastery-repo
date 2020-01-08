import React from 'react';


const VideoDetail = ({ video }) => {

    if(!video){
        return(
            <div>
                Waiting for video...
            </div>
        );
    }

    return(
        <div>
            {video.snippet.title}
        </div>
    );
}



export default VideoDetail;
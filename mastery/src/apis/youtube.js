import axios from 'axios';

const KEY = AIzaSyAA9SfrI-ORNC-hAetkwQ_7eSS3UMrJJFc;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});







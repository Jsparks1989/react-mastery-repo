import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';


class App extends React.Component {

    // initializing state.videos as an empty array.
    state = { videos: [], selectedVideo: null };
 
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        /*
         * 'response' is the entire response object recieved from youtube.
         * Our list of videos recieved from our api request is located at:
         * response.data.items
         * Set state.videos to the array of videos recieved from youtube.
         */
        this.setState({ videos: response.data.items });
    }

    searchBarInput = () => {
        // callback passed to SearchBar for video search input.
    }

    onVideoSelect = (video) => {
        console.log('Coming from App.js', video);
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                {/* I have recieved {this.state.videos.length} videos from my search. */}
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        );
    }
}



export default App;
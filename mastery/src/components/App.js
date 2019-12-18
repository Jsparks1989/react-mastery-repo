import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';


class App extends React.Component {

    // Callback that will be called whenever form is submitted from SearchBar component.
    // Gets added onto the request made with axios.create() in youtube.js. 
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
    }

    searchBarInput = () => {
        // callback passed to SearchBar for video search input.
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        );
    }
}



export default App;
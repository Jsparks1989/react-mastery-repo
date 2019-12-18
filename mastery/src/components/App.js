import React from 'react';
import SearchBar from './SearchBar';


class App extends React.Component {

    searchBarInput = () => {
        // callback passed to SearchBar for video search input.
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar />
            </div>
        );
    }
}



export default App;
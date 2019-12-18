import React from 'react';




class SearchBar extends React.Component{

    // initialize the state.
    state = { term: '' };


    // input onChange callback
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
        console.log(this.state.term);
    }

    // reset onClick callback
    resetInput = () => {
        this.setState({ term: '' });
    }

    // form onSubmit callback
    onFormSubmit = (event) => {
        // Dont want browser submitting form on its own.
        event.preventDefault();

        // Call callback from parent component.
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        {/* must have onChange= event handler along with value= or else input will be read only.*/}
                        <input type="text" 
                               value={this.state.term} 
                               onChange={this.onInputChange}>

                               </input>
                    </div>
                    <button type="submit" className="ui primary button">Search</button>
                    <button className="ui button" onClick={this.resetInput}>Reset</button>
                </form>


            </div>
        );
    }
}



export default SearchBar;
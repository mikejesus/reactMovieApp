import React from 'react';

class Search extends React.Component {
    constructor(){
        super();
        this.state = {
            value: '',
        };
    }

    setValue = (event) => {
        this.setState({value: event.target.value});
        this.props.submit(event.target.value);
    };


    submitForm = (event) =>{
        event.preventDefault();
        this.props.submit(this.state.value);
        
    }

    render(){
        return (
            <div>
                <form className="search-form" onSubmit={this.submitForm}>
                    <input 
                    value={this.state.value}
                    onChange={this.setValue}
                    className="search-input" 
                    placeholder="Search for a movie" />

                    <button className="search-button">Search</button>
                </form>
            </div>

        )
    }
}
export default Search;
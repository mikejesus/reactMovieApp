import React, { Component } from 'react';

class Header extends Component {
    constructor(props){      
        super(props);
    }
  render(){

        return(
            <div className="App">
            <header className="App-header">
              <p>{this.props.title}</p>  
              
            </header>
        </div>
        )
    }

}

export default Header;
import React, { Component } from 'react';

class Movie extends Component {
    constructor(props){      
        super(props);
    }
  render(){

        return(
            
          <div className="mcard"> 
              
              {/* <ul className="movielist">
                  <li>Movie 1</li>
                  <li>Movie 2</li>
                  <li>Movie 3</li>
              </ul> */}

              <p>{this.props.name}</p>
              <img src="pop3.png" alt="Image Caption" width="300px" height="400px"/>
              <p>{this.props.year}</p>
              <p>{this.props.description}</p>

          </div>

        )
    }

}

export default Movie;
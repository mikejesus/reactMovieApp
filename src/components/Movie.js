import React, { Component } from 'react';

class Movie extends Component {
    
  render(){

        return(
            
          <div className="mcard"> 
              
            <h3>{this.props.meta.Title}</h3>
            <img width="200" alt={`The movie titled: ${this.props.meta.Title}`} src={this.props.meta.Poster}/>
            <p>({this.props.meta.Year})</p>
        

          </div>

        )
    }

}

export default Movie;

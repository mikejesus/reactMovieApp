import React, { Component } from 'react';

class Movie extends Component {
    
  render(){

        return(
            
          <div className="mcard"> 
              
            <h3>{this.props.meta.Title}</h3>
            <div>
                <img width="250" alt={`The movie titled: ${this.props.meta.Title}`} src={this.props.meta.Poster}/>
            </div>
            <p>({this.props.meta.Year})</p>
        

          </div>

        )
    }

}

export default Movie;

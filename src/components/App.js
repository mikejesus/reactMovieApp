import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Michael Movie App"/>
        <div className="movie">
          <Movie 
            name="My First movie"
            year = "2010"
            img-url = "pop3.png"
            description  = "My First Description"
          />
          
          <Movie 
            name="Second movie"
            year = "2013"
            img-url = " "
            description  = "This description is nice"
          />

          <Movie 
            name="Third movie"
            year = "2016"
            img-url = " "
            description  = "This is the third description"
          />
          
          <Movie 
            name="Fourth movie"
            year = "2018"
            img-url = " "
            description  = "Yippee! the final description is here"
          />

         
        </div>
        
      </div>
    );
  }
}

export default App;

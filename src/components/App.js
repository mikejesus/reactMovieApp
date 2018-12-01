import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import Search from './Search';
import spinner from '../ajax-loader.gif';



class App extends Component {
  
  constructor(){
    super();

    this.state = {
      movies: [],
      loader: true,
      search: 'action'
      
  };
}

  componentDidMount(){
    this.searchMovie();
  };

  searchMovie(){
    this.setState({loader: true});
    let url = `https://www.omdbapi.com/?s=${this.state.search}&apikey=4a3b711b`;
    fetch(url)
    .then( res => res.json())
    .then(jsonres => {
        this.setState({
        movies: jsonres.Search || [],
        loader: false
        
    })
    // console.log(jsonres);
  })
  .catch(error => {
      console.log(error);
  })

  }


  submitSearch = (value) =>{
    this.setState({search: value}, () =>{
      this.searchMovie();
    });
    
  }

  render() {
    return (
      
      <div className="App">
        <Header title="Michael Movie App" />
      <p className="App-intro">We are sharing few of our movies</p>
        <Search  submit={this.submitSearch}/>
        <div className="movies">
          {
            this.state.loader? (<img className="animation" src={spinner}/>): 
            
            (this.state.movies.map(( movie, index )=>(
              <Movie 
                key={`${index}-${movie.Title}`}
                meta = {movie}
                // name={movie.title}
                // year={movie.year}
                // description = {movie.description}
                // poster = {movie.poster}

              />
            ))
            )
          }
        </div>
      </div>
         
        
    );
  }
}

export default App;

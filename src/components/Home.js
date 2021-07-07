import React, { useState } from 'react';
import { moviesList } from '../services/movies';
import AddMovie from './AddMovie';
import SearchMovie from './Filter';
import MoviesList from './MoviesList';




function Home() {
  const [movieList, setMovieList] = useState(moviesList);
  const [searchMovie, setSearchMovie] = useState('');
  const [ratingSearch, setRatingSearch] = useState(null);

  const addMovie = (newMovie) => setMovieList([...movieList, newMovie]);

  return (
   <div className="container-fluid">
    
      <SearchMovie
          setSearchMovie={setSearchMovie}
          ratingSearch={ratingSearch}
          setRatingSearch={setRatingSearch}
        /> 
         <AddMovie handleAdd={addMovie} />
         <MoviesList
          moviesList={moviesList}
          searchMovie={searchMovie}
          ratingSearch={ratingSearch}
        />
       
      
    </div>
   
  );
}

export default Home;
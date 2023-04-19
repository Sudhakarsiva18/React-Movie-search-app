import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import './components/Style.css'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=b0202a42`)
      .then((response) => {
        setMovies(response.data.Search);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id='mydiv'>
      <center>
      <h1>Movie Search App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      </center>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;

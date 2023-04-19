import React from 'react';
import './Movielist.css'

const Movie = ({ title, year, poster }) => {
  return (
    <div id='div1'>
      <h3>{title}</h3>
      <h4>{year}</h4>
      <img src={poster} alt={title} />
    </div>
  );
};

export default Movie;
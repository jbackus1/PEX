import React, { useState } from 'react';
import './MovieList.css';

const moviesData = [
  { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
  { title: "The Godfather", genre: "Crime", releaseYear: 1972 },
  { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
  { title: "Pulp Fiction", genre: "Crime", releaseYear: 1994 },
  { title: "Toy Story", genre: "Animation", releaseYear: 1995 },
  { title: "Sword Art Online", genre: "Anime", releaseYear: 2014 },
  { title: "My Hero Academia", genre: "Anime", releaseYear: 2019 },
  { title: "Spirited Away", genre: "Anime", releaseYear: 2001 },
  { title: "Ponyo", genre: "Anime", releaseYear: 2008 },
];

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const genres = ['All Genres', ...new Set(moviesData.map(movie => movie.genre))];

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleMovieClick = (title) => {
    alert(`Movie: ${title}`);
  };

  const filteredMovies = selectedGenre === 'All Genres'
    ? moviesData
    : moviesData.filter(movie => movie.genre === selectedGenre);

  return (
    <div className="movie-list-container">
      <h1>Movie List</h1>
      <select onChange={handleGenreChange} value={selectedGenre}>
        {genres.map((genre, idx) => (
          <option key={idx} value={genre}>{genre}</option>
        ))}
      </select>

      <div className="movie-grid">
        {filteredMovies.map((movie, idx) => (
          <div
            key={idx}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

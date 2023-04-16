const movies = [
    {
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      director: 'Frank Darabont',
      rating: 9.3
    },
    {
      title: 'The Godfather',
      genre: 'Crime, Drama',
      director: 'Francis Ford Coppola',
      rating: 9.2
    },
    {
      title: 'The Dark Knight',
      genre: 'Action, Crime, Drama',
      director: 'Christopher Nolan',
      rating: 9.0
    },
    {
      title: '12 Angry Men',
      genre: 'Drama',
      director: 'Sidney Lumet',
      rating: 8.9
    },
    {
      title: 'Schindler\'s List',
      genre: 'Biography, Drama, History',
      director: 'Steven Spielberg',
      rating: 8.9
    }
  ];
  
  function getFilteredMovies(preferences) {
    return movies.filter(movie => {
      for (let preference of preferences) {
        if (movie.genre.includes(preference)) {
          return true;
        }
      }
      return false;
    });
  }
  
  function recommendMovie(preferences) {
    const filteredMovies = getFilteredMovies(preferences);
    if (filteredMovies.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * filteredMovies.length);
    return filteredMovies[randomIndex];
  }
  
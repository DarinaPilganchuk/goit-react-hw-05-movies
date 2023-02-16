import PropTypes from 'prop-types';

import MovieList from 'components/MoviesList/MoviesList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchFilms } from 'components/services/API';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const [searhGallery, setSearchGallery] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function handleFetchSearchFilms() {
      try {
        setError(null);
        if (!movieName) {
          return;
        }

        const searchFilm = await fetchSearchFilms(movieName);
        setError(null);

        if (searchFilm.results.length === 0) {
          setError('Nothing found 😒. Please enter another value ');
        }
        console.log(movieName);
        setSearchGallery(searchFilm.results);

        console.log(searchFilm.results);
      } catch {
        setError('Error 😒. Please reload page 👍');
      } finally {
      }
    }
    handleFetchSearchFilms(movieName);
  }, [movieName]);

  console.log(searhGallery);

  return (
    <main>
      <SearchBox />
      {error && <p>{error}</p>}
      <ul>
        {movieName && searhGallery && <MovieList searhGallery={searhGallery} />}
      </ul>
    </main>
  );
};

export default Movies;

Movies.propTypes = {
  gallery: PropTypes.arrayOf(),
};

import PropTypes from 'prop-types';

import { fetchCastFilms } from 'components/services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CastItem from 'components/CastItem/CastItem';

const Cast = () => {
  const { movieId } = useParams({});

  const [cast, setCast] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function handleFetchCastFilms() {
      try {
        setError(null);
        if (!movieId) {
          return;
        }

        const castFilm = await fetchCastFilms(movieId);
        setError(null);

        setCast(castFilm.cast);
      } catch {
        setError('Error 😒. Please reload page 👍');
      } finally {
      }
    }
    handleFetchCastFilms(movieId);
  }, [movieId]);

  if (!cast) {
    return;
  }
  console.log(cast);

  return (
    <main>
      {error && <p>{error}</p>}
      <CastItem cast={cast} />
    </main>
  );
};

export default Cast;

Cast.propTypes = {
  gallery: PropTypes.arrayOf().isRequired,
};

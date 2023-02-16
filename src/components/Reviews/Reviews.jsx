import { fetchReviewsFilms } from 'components/services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PropTypes from 'prop-types';

import ReviewsItem from 'components/ReviewsItem/ReviewsItem';

const Reviews = () => {
  // const [searchParams] = useSearchParams();
  const { movieId } = useParams({});

  const [reviews, setReviews] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function handleFetchReviewsFilms() {
      try {
        setError(null);
        if (!movieId) {
          return;
        }
        console.log(movieId);
        const reviewsFilm = await fetchReviewsFilms(movieId);
        setError(null);

        if (reviewsFilm.results.length === 0) {
          setError("We don't have any reviews for this movie");
        }
        console.log(reviewsFilm);
        setReviews(reviewsFilm.results);

        console.log(reviewsFilm);
      } catch {
        setError('Error 😒. Please reload page 👍');
      } finally {
      }
    }
    handleFetchReviewsFilms(movieId);
  }, [movieId]);

  if (!reviews) {
    return;
  }
  console.log(reviews);

  return (
    <main>
      {error && <p>{error}</p>}
      <ReviewsItem reviews={reviews} />
    </main>
  );
};

export default Reviews;

Reviews.propTypes = {
  gallery: PropTypes.arrayOf().isRequired,
};

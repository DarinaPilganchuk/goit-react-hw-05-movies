import { fetchFilmsCard } from 'components/services/API';
import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import {
  Main,
  Box,
  BoxCard,
  LinkBtn,
  Title,
  Text,
  TitleCategory,
  AdittionalBlock,
  TitleAdittional,
  ItemAdittional,
} from './MovieCard.styled';

const MovieCard = () => {
  const { movieId } = useParams({});
  const [film, setFilm] = useState();
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  // console.log('card');
  // console.log(movieId);
  useEffect(() => {
    async function handleFetchFilmCard() {
      try {
        // console.log('card11');
        const filmCard = await fetchFilmsCard(movieId);
        setError(null);
        setFilm(filmCard);
      } catch {
        setError('Error 😒. Please reload page 👍');
      } finally {
      }
    }
    handleFetchFilmCard(Number(movieId));
  }, [movieId]);
  if (!film) {
    return;
  }
  console.log(error);
  // console.log(film);
  const { poster_path, original_title, overview, genres, vote_average } = film;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://www.pngall.com/wp-content/uploads/7/Gallery-PNG-Free-Download.png';

  const voteAverage = Math.round(vote_average * 10);
  const genresFilm = genres.map(genre => genre.name).join(' ');
  return (
    film && (
      <Main>
        <LinkBtn to={backLinkHref}>Go Back</LinkBtn>
        <Box>
          <img src={poster} alt="11" width="240"></img>
          <BoxCard>
            <Title>{original_title}</Title>
            <Text>User Score: {voteAverage}%</Text>
            {overview && <TitleCategory>Overviev</TitleCategory>}
            <Text>{overview}</Text>
            {genresFilm && <TitleCategory>Genres</TitleCategory>}
            <Text> {genresFilm}</Text>
          </BoxCard>
        </Box>
        <AdittionalBlock>
          <TitleAdittional>Adittional international</TitleAdittional>
          <ul>
            <ItemAdittional>
              <Link to="cast" state={{ from: backLinkHref }}>
                Cast
              </Link>
            </ItemAdittional>
            <ItemAdittional>
              <Link to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </Link>
            </ItemAdittional>
          </ul>
        </AdittionalBlock>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    )
  );
};

export default MovieCard;

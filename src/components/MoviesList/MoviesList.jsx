import { Link, useLocation } from 'react-router-dom';
const MovieList = ({ searhGallery }) => {
  const location = useLocation();
  console.log(searhGallery);
  return (
    <>
      {searhGallery.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={{ from: location }}>
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
};
export default MovieList;

import { Link, useLocation } from 'react-router-dom';

const HomeList = ({ gallery }) => {
  const location = useLocation();
  console.log(gallery.title);
  return (
    <>
      {gallery.map(gallery => (
        <li key={gallery.id}>
          <Link to={`/movies/${gallery.id}`} state={{ from: location }}>
            {gallery.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default HomeList;

import axios from 'axios';
const API_KEY = 'e5f14f5416082ca34e1b831443110cc8';
export const fetchPopularyFilms = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day',
    {
      params: {
        api_key: API_KEY,
      },
    }
  );
  return response.data;
};

export const fetchSearchFilms = async (query = 'cat') => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        api_key: API_KEY,
        query: `${query}`,
      },
    }
  );
  return response.data;
};
export const fetchFilmsCard = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchCastFilms = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchReviewsFilms = async (movieId = 255) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
  );
  return response.data;
};

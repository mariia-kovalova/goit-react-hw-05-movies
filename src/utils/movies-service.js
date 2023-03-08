import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'f68110fe6010762197ab45abbadc1a08';

export const getTrendingFilms = async page => {
  const { data } = await axios.get('/trending/movie/day', {
    params: {
      api_key: API_KEY,
      page,
    },
  });

  return data;
};

export const getFilmsByKeyword = async ({ query, page }) => {
  const { data } = await axios.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query,
      page,
      include_adult: false,
    },
  });

  return data;
};

export const getFilmById = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
};

export const getFilmTrailer = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/videos`, {
    params: {
      api_key: API_KEY,
    },
  });

  return data;
};

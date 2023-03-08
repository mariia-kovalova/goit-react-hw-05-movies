import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<div>Movie Cast</div>} />
        <Route path="reviews" element={<div>Movie reviews</div>} />
      </Route>
    </Route>
  </Routes>
);

import { MovieItem } from 'components/MovieItem';
import PropTypes from 'prop-types';
import { List } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <MovieItem movie={movie} />
        </li>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

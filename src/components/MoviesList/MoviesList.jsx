import { MovieItem } from 'components/MovieItem';
import PropTypes from 'prop-types';
import { List, Item } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <MovieItem movie={movie} />
        </Item>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

import PropTypes from 'prop-types';
import { Text, Wrap } from './ReviewCard.styled';

export const ReviewCard = ({ item: { author, content } }) => {
  return (
    <Wrap>
      <Text>Author: {author}</Text>
      <Text>Review: {content}</Text>
    </Wrap>
  );
};

ReviewCard.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};

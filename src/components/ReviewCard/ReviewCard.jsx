import PropTypes from 'prop-types';
import { Text, Wrap } from './ReviewCard.styled';

export const ReviewCard = ({ item: { author, content } }) => {
  return (
    <Wrap>
      <Text>
        <b>Author:</b> {author}
      </Text>
      <Text>
        <b>Review:</b> {content}
      </Text>
    </Wrap>
  );
};

ReviewCard.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};

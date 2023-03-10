import PropTypes from 'prop-types';
import { getCastSrc } from 'utils/infoConverter';
import { Text, Wrap } from './CastCard.styled';

export const CastCard = ({ item: { name, profile_path, character } }) => {
  const src = getCastSrc(profile_path);
  return (
    <Wrap>
      <img src={src} alt={name} width="200" height="300" />
      <div>
        <Text> {name}</Text>
        <Text>Character: {character}</Text>
      </div>
    </Wrap>
  );
};

CastCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    profile_path: PropTypes.string,
    character: PropTypes.string,
  }),
};

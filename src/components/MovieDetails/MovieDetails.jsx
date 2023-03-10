import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fixedNumber, getGenresListFromArr, getSrc } from 'utils/infoConverter';
import {
  About,
  AboutDescription,
  AboutTitle,
  FilmInfo,
  FilmTitle,
  InfoLabel,
  InfoValue,
  Thumb,
  Vote,
  VoteCount,
  Table,
  Wrap,
  MoreInfoLink,
} from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  const { movieId } = useParams();
  const {
    poster_path,
    title,
    original_title,
    vote_average,
    vote_count,
    popularity,
    overview,
    genres,
  } = movie;

  const src = getSrc(poster_path);
  const genresNames = getGenresListFromArr(genres);
  const voteFixed = fixedNumber(vote_average);
  const popularityFixed = fixedNumber(popularity);

  return (
    <Wrap>
      <Thumb className="img_wrap">
        <img src={src} alt={title} />
      </Thumb>
      <FilmInfo>
        <FilmTitle>{title}</FilmTitle>
        <Table>
          <tbody>
            <tr>
              <InfoLabel>Vote / Votes</InfoLabel>
              <InfoValue>
                <Vote>{voteFixed}</Vote> /<VoteCount>{vote_count}</VoteCount>
              </InfoValue>
            </tr>
            <tr>
              <InfoLabel>Popularity</InfoLabel>
              <InfoValue>{popularityFixed}</InfoValue>
            </tr>
            <tr>
              <InfoLabel>Original Title</InfoLabel>
              <InfoValue>{original_title}</InfoValue>
            </tr>
            {genres.length > 0 && (
              <tr>
                <InfoLabel>Genre</InfoLabel>
                <InfoValue>{genresNames}</InfoValue>
              </tr>
            )}
          </tbody>
        </Table>
        {overview && (
          <About>
            <AboutTitle>OVERVIEW </AboutTitle>
            <AboutDescription>{overview}</AboutDescription>
          </About>
        )}
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <MoreInfoLink to={`/movies/${movieId}/cast`}>Cast</MoreInfoLink>
            </li>
            <li>
              <MoreInfoLink to={`/movies/${movieId}/reviews`}>
                Reviews
              </MoreInfoLink>
            </li>
          </ul>
        </div>
      </FilmInfo>
    </Wrap>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    popularity: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })
    ),
  }),
};

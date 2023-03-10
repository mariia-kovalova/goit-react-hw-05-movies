import { getFilmReviews } from 'api/movies-service';
import { Error } from 'components/Error';
import { Container, LightSection } from 'components/GlobalStyles.styled';
import { Loader } from 'components/Loader';
import { ReviewCard } from 'components/ReviewCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Title, Wrap } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async movieId => {
      try {
        setError(null);
        setIsLoading(true);
        const { results } = await getFilmReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <Container>
      <LightSection>
        <Wrap>
          <Title>Reviews: </Title>
          {!isLoading && !error && reviews && reviews.length > 0 && (
            <List>
              {reviews.map(item => (
                <li key={item.id}>
                  <ReviewCard item={item} />
                </li>
              ))}
            </List>
          )}
          {!isLoading && !error && reviews && reviews.length === 0 && (
            <Error>There is no reviews yet.</Error>
          )}
          {isLoading && <Loader open={isLoading} />}
          {error && <Error>Sorry, something went wrong...</Error>}
        </Wrap>
      </LightSection>
    </Container>
  );
};

export default Reviews;

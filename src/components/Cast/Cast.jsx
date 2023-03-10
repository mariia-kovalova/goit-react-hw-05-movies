import { getFilmCast } from 'api/movies-service';
import { CastCard } from 'components/CastCard';
import { Error } from 'components/Error';
import { Container, LightSection } from 'components/GlobalStyles.styled';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Title, Wrap, Item } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async movieId => {
      try {
        setError(null);
        setIsLoading(true);
        const data = await getFilmCast(movieId);
        const minCast = data.cast.slice(0, 10);
        setCast(minCast);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <Container>
      <LightSection>
        <Wrap>
          <Title>Movie cast: </Title>
          {!isLoading && !error && cast && cast.length > 0 && (
            <List>
              {cast.map(item => (
                <Item key={item.id}>
                  <CastCard item={item} />
                </Item>
              ))}
            </List>
          )}
          {!isLoading && !error && cast && cast.length === 0 && (
            <Error>There is no information about cast.</Error>
          )}
          {isLoading && <Loader open={isLoading} />}
          {error && <Error>Sorry, something went wrong...</Error>}
        </Wrap>
      </LightSection>
    </Container>
  );
};

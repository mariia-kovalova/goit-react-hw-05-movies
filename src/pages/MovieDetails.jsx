import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getFilmById } from 'api/movies-service';
import { Movie } from 'components/Movie';
import { Container, LightSection, Main } from 'components/GlobalStyles.styled';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const getFilm = async movieId => {
      try {
        setIsLoading(true);
        const data = await getFilmById(movieId);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getFilm(movieId);
  }, [movieId]);

  return (
    <Main>
      <Container>
        <LightSection>
          {!isLoading && !error && movie && <Movie movie={movie} />}
          {isLoading && <Loader open={isLoading} />}
          {error && <Error>Sorry, something went wrong...</Error>}
        </LightSection>
      </Container>
      <Outlet />
    </Main>
  );
};

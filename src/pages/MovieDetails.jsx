import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getFilmById } from 'api/movies-service';
import { Movie } from 'components/Movie';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import {
  Container,
  DarkSection,
  GoBackLink,
  LightSection,
  Main,
} from 'components/GlobalStyles.styled';

export const MovieDetails = () => {
  const location = useLocation();
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
      <DarkSection>
        <Container>
          <GoBackLink to={location.state.from}>
            <IconContext.Provider value={{ size: '1.4em' }}>
              <BsArrowLeftCircle />
            </IconContext.Provider>
            <span>Go back</span>
          </GoBackLink>
        </Container>
      </DarkSection>
      <LightSection>
        <Container>
          {!isLoading && !error && movie && <Movie movie={movie} />}
          {isLoading && <Loader open={isLoading} />}
          {error && <Error>Sorry, something went wrong...</Error>}
        </Container>
      </LightSection>
      <Outlet />
    </Main>
  );
};

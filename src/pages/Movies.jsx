import usePagination from '@mui/material/usePagination/usePagination';
import {
  Container,
  DarkSection,
  LightSection,
  Main,
} from 'components/GlobalStyles.styled';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList';
import { MuiPagination } from 'components/MuiPagination';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmsByKeyword } from 'api/movies-service';
import { Error } from 'components/Error';

export const Movies = () => {
  let [searchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const paginationData = usePagination(totalPages);

  useEffect(() => {
    setError(null);
    const query = searchParams.get('query') || '';
    if (query === '') return;

    const getFilms = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await getFilmsByKeyword({
          query,
          page,
        });
        setMovies(results);
        setTotalPages(total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getFilms();
  }, [page, searchParams]);

  const handleChange = (_, nextPage) => {
    setPage(nextPage);
    paginationData.jump(nextPage);
  };
  return (
    <Main>
      <DarkSection>
        <Container>
          <SearchForm />
        </Container>
      </DarkSection>
      <LightSection>
        <Container>
          {movies && movies.length > 0 && !isLoading && !error && (
            <MoviesList movies={movies} />
          )}
          {movies && movies.length === 0 && !isLoading && !error && (
            <Error>Sorry, there is no such films. Please, try again.</Error>
          )}
          {isLoading && <Loader open={isLoading} />}
          {error && <Error>Sorry, something went wrong...</Error>}
          {!isLoading && !error && totalPages > 1 && (
            <MuiPagination
              count={totalPages}
              page={page}
              onChange={handleChange}
            />
          )}
        </Container>
      </LightSection>
    </Main>
  );
};

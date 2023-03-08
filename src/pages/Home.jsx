import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader';
import { MoviesList } from 'components/MoviesList';
import { getTrendingFilms } from 'utils/movies-service';
import {
  Container,
  DarkSection,
  LightSection,
  Main,
  MainTitle,
} from 'components/GlobalStyles.styled';
import usePagination from '@mui/material/usePagination/usePagination';
import { MuiPagination } from 'components/MuiPagination';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const paginationData = usePagination(totalPages);

  useEffect(() => {
    const getFilms = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await getTrendingFilms(page);
        setMovies(results);
        setTotalPages(total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getFilms();
  }, [page]);

  const handleChange = (_, nextPage) => {
    setPage(nextPage);
    paginationData.jump(nextPage);
  };

  return (
    <Main>
      <DarkSection>
        <Container>
          <MainTitle>Trending now</MainTitle>
        </Container>
      </DarkSection>
      <LightSection>
        <Container>
          {movies.length > 0 && <MoviesList movies={movies} />}
          {isLoading && <Loader open={isLoading} />}
          {error && <div>Error</div>}
        </Container>
        {totalPages >= 1 && (
          <Container>
            <MuiPagination
              count={totalPages}
              page={page}
              onChange={handleChange}
            />
          </Container>
        )}
      </LightSection>
    </Main>
  );
};

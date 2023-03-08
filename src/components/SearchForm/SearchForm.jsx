import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Input, SearchBtn, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSearchFormSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    if (query.trim() === '') return alert('Enter your query!');
    setSearchParams({ query });
    const form = e.target;
    form.reset();
  };

  return (
    <SearchFormStyled onSubmit={handleSearchFormSubmit}>
      <Input type="text" placeholder="Movie search" name="query" />
      <SearchBtn type="submit" aria-label="search">
        <IconContext.Provider value={{ size: '1em' }}>
          <FaSearch />
        </IconContext.Provider>
      </SearchBtn>
    </SearchFormStyled>
  );
};

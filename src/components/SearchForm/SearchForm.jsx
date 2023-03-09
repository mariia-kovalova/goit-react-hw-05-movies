import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Error, Input, SearchBtn, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);

  const handleChange = ({ target: { value } }) => {
    if (value.trim() !== '') setError(false);
  };

  const handleSearchFormSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    if (query.trim() === '') return setError(true);
    setSearchParams({ query });
    const form = e.target;
    form.reset();
  };

  return (
    <SearchFormStyled onSubmit={handleSearchFormSubmit}>
      <Input
        type="text"
        placeholder="Movie search"
        name="query"
        onChange={handleChange}
      />
      <SearchBtn type="submit" aria-label="search">
        <IconContext.Provider value={{ size: '1em' }}>
          <FaSearch />
        </IconContext.Provider>
      </SearchBtn>
      {error && <Error>Please, enter your query!</Error>}
    </SearchFormStyled>
  );
};

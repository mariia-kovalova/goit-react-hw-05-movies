import styled from '@emotion/styled';

export const SearchFormStyled = styled.form`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 0.5px solid var(--color-text-light);
  transition: border-bottom 250ms var(--cubic);

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
  }

  &:focus-within {
    border-bottom: 0.5px solid var(--color-accent);
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  color: var(--color-text-light);
  outline: none;

  &::placeholder {
    font-size: 14px;
    line-height: 1.14;
    color: #ffffff4f;
  }
`;

export const SearchBtn = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-text-light);
  transition: color 250ms var(--cubic);
  outline: none;

  &:hover,
  &:focus {
    color: var(--color-accent);
  }
`;

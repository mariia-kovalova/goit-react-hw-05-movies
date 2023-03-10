import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    row-gap: 32px;
    column-gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    column-gap: 16px;
  }
`;

export const Item = styled.li`
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 32px) / 3);
  }
`;

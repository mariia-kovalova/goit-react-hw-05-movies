import styled from '@emotion/styled';

export const Title = styled.h2`
  color: var(--color-text-dark);
  margin-bottom: 30px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 20px;

  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`;

export const Item = styled.li`
  width: 200px;
`;

export const Wrap = styled.div`
  min-height: 400px;
`;

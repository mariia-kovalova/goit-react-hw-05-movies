import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  padding-top: 40px;
  padding-bottom: 20px;
  background-color: #252d31;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 15px;

  @media screen and (min-width: 768px) {
    column-gap: 40px;
  }
`;

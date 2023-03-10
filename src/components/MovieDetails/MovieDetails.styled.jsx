import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  color: var(--color-text-dark);

  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 50px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Thumb = styled.div`
  overflow: hidden;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    width: 240px;
    height: 357px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: auto;
  }
`;

export const FilmInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1280px) {
    flex-basis: calc(100% - 350px - 50px);
  }
`;

export const FilmTitle = styled.h2`
  font-size: 20px;
  line-height: 1.17;

  @media screen and (min-width: 1280px) {
    font-size: 30px;
  }
`;

export const Table = styled.table`
  border-spacing: 0 8px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`;

export const InfoLabel = styled.td`
  vertical-align: top;
  min-width: 108px;
  font-weight: 500;
  color: var(--color-text-secondary);
  font-size: 12px;
  line-height: 1.33;

  @media screen and (min-width: 1280px) {
    min-width: 152px;
    font-size: 16px;
  }
`;

export const InfoValue = styled.td`
  font-size: 12px;
  line-height: 1.33;
  font-weight: 500;
  color: var(--color-text-dark);

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const Vote = styled.span`
  display: inline-block;
  text-align: center;
  border-radius: 5px;
  width: 36px;
  height: 16px;
  background-color: var(--color-accent);
  color: var(--color-text-light);
  margin-right: 4px;

  @media screen and (min-width: 1280px) {
    width: 40px;
    height: 20px;
  }
`;

export const VoteCount = styled.span`
  display: inline-block;
  text-align: center;
  border-radius: 5px;
  width: 36px;
  height: 16px;
  background-color: #f7f7f7;
  margin-left: 4px;

  @media screen and (min-width: 1280px) {
    width: 40px;
    height: 20px;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    width: 264px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const AboutTitle = styled.div`
  font-size: 12px;
  line-height: 1.33;
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const AboutDescription = styled.p`
  font-size: 12px;
  line-height: 1.67;
  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const List = styled.ul`
  padding-top: 10px;
  display: flex;
  gap: 20px;
`;

export const MoreInfoLink = styled(Link)`
  color: var(--color-card__text);
  :hover {
    color: var(--color-error);
  }
`;

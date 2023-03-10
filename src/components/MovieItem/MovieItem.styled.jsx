import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
`;

export const Poster = styled.img`
  height: 398px;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: transform 250ms linear;

  ${CardLink}:hover &, ${CardLink}:focus & {
    transform: scale(0.95);
  }

  @media screen and (min-width: 768px) {
    height: 455px;
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1280px) {
    height: 574px;
    margin-bottom: 12px;
  }
`;

export const Title = styled.h2`
  font-family: var(--font-primary);
  font-size: 12px;
  line-height: 1.33;
  text-transform: uppercase;
  color: var(--color-text-dark);
  transition: transform 300ms ease-in-out, color 300ms ease-in-out;

  ${CardLink}:hover &, ${CardLink}:focus & {
    transform: translateX(10px);
    color: #f86c00;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Text = styled.p`
  font-family: var(--font-primary);
  font-size: 12px;
  line-height: 1.33;
  color: var(--color-card__text);
  transition: transform 300ms ease-in-out, color 300ms ease-in-out;

  ${CardLink}:hover &, ${CardLink}:focus & {
    transform: translateX(10px);
    color: var(--color-text-dark);
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Rating = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 16px;

  font-size: 12px;
  line-height: 1.167;
  text-align: center;
  background-color: var(--color-accent);
  color: var(--color-text-light);
  border-radius: 5px;
  margin-left: 8px;

  @media screen and (min-width: 1280px) {
    width: 40px;
    height: 20px;
    vertical-align: text-bottom;
  }
`;

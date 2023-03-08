import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-light);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  &:hover,
  &:focus {
    color: var(--color-accent);
  }
`;

export const LogoText = styled.span`
  display: none;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.17;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

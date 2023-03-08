import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.nav`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
`;

export const NavBarList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 15px;

  @media screen and (min-width: 768px) {
    column-gap: 40px;
  }
`;

export const NavBarLink = styled(NavLink)`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-text-light);
  outline: none;
  transition: color 250ms var(--cubic);

  &.active::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: var(--color-error);
  }

  &:hover,
  &:focus {
    color: var(--color-accent);
  }
`;

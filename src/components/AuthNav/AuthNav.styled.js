import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.nav`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 20px 10px;
  text-decoration: none;
  color: black;

  &.active {
    color: orange;
  }
  &:hover,
  :focus {
    color: orange;
  }
`;

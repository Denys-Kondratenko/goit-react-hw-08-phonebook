import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeLink = styled(Link)`
  padding: 5px 10px;
  text-decoration: none;
  color: black;
  box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  &:hover,
  :focus {
    color: white;
    background-color: orange;
  }
`;

export const HomeList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  padding: 0;
  justify-content: center;
`;

export const HomeWrap = styled.div`
  margin: 0 auto;
`;

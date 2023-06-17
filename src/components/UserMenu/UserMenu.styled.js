import styled from 'styled-components';

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.3);
  &:hover,
  :focus {
    color: white;
    background-color: orange;
  }
`;

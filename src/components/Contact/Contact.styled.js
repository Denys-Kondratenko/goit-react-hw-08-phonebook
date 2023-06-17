import styled from 'styled-components';

export const ContactsList = styled.ul`
  list-style: disc;
  padding-left: 5px;
  width: 400px;
`;

export const ContactItem = styled.li`
  display: flex;
  gap: 10px;
  padding-bottom: 14px;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButton = styled.button`
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

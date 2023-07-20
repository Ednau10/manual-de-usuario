// /scr/components/manual/MenuColumn.styled.jsx
import styled from 'styled-components';

export const Column = styled.div`
  width: 25%;
  color: #930707;
  font-weight: bold;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MenuListItem = styled.li`
  cursor: pointer;
  padding: 25px;
  background-color: ${({ selected }) => (selected ? '#edeaea' : 'transparent')};
`;

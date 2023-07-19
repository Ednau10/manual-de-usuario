import styled from 'styled-components';

export const TopicsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const TopicItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #00bcd4;
  }
`;

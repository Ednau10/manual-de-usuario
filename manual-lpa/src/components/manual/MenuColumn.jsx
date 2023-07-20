// /scr/components/manual/MenuColumn.jsx
import React from 'react';
import { Column, MenuList, MenuListItem } from './MenuColumn.styled';

const MenuColumn = ({ topics, selectedTopic, handleTopicChange }) => {
  return (
    <Column>
      <MenuList>
        {topics.map((topic) => (
          <MenuListItem
            key={topic.numberTopic}
            selected={selectedTopic?.numberTopic === topic.numberTopic}
            onClick={() => handleTopicChange(topic)}
          >
            {topic.desc}
          </MenuListItem>
        ))}
      </MenuList>
    </Column>
  );
};

export default MenuColumn;

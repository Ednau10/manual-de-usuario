import React from 'react';
import { TopicsList, TopicItem } from './MenuTopics.styled';

const MenuTopics = ({ topics, onSelectTopic }) => {
  return (
    <TopicsList>
      {topics.map((topic) => (
        <TopicItem key={topic.id} onClick={() => onSelectTopic(topic.id)}>
          {topic.title}
        </TopicItem>
      ))}
    </TopicsList>
  );
};

export default MenuTopics;
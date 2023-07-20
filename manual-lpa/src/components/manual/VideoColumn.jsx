// /scr/components/manual/VideoColumn.jsx
import React from 'react';
import { Column, Video } from './VideoColumn.styled';

const VideoColumn = ({ topics, selectedTopic }) => {
  const selectedVideoLink =
    topics.find((topic) => topic.numberTopic === selectedTopic?.numberTopic)?.videoLink ||
    'https://www.example.com/defaultVideo';

  return (
    <Column>
      <iframe
        width="560"
        height="315"
        src={selectedVideoLink}
        title="Video explicativo"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </Column>
  );
};

export default VideoColumn;

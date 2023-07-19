import React from 'react';
import { ColumnContainer, VideoWrapper, VideoTitle } from './VideoColumn.styled';

const VideoColumn = ({ videoLink, videoTitle }) => {
  return (
    <ColumnContainer>
      <VideoWrapper>
        <iframe src={videoLink} title={videoTitle} allowFullScreen />
      </VideoWrapper>
      <VideoTitle>{videoTitle}</VideoTitle>
    </ColumnContainer>
  );
};

export default VideoColumn;

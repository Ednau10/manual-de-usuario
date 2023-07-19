import styled from 'styled-components';

export const ColumnContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const VideoTitle = styled.h3`
  margin-top: 10px;
`;

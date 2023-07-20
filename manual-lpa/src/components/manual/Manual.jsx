import React, { useState } from 'react';
import MenuColumn from './MenuColumn';
import InstructionsColumn from './InstructionsColumn';
import VideoColumn from './VideoColumn';
import NavigationButtons from './NavigationButtons';
import manualData from '../json/manualData.json';
import { Container, Main } from '../../App.styled';

const Manual = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleProfileChange = (profile) => {
    setSelectedProfile(profile);
    setSelectedTopic(null);
  };

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <Container>
      <h1>Manual de Usuario</h1>
      <Main>
        <MenuColumn
          topics={manualData.profiles}
          selectedTopic={selectedTopic}
          onChange={handleTopicChange}
        />
        {selectedTopic && (
          <>
            <InstructionsColumn
              topics={selectedProfile.topics}
              selectedTopic={selectedTopic}
            />
            <VideoColumn
              topics={selectedProfile.topics}
              selectedTopic={selectedTopic}
            />
          </>
        )}
        <NavigationButtons />
      </Main>
    </Container>
  );
};

export default Manual;

import React, { useState } from 'react';
import { Container } from './App.styled';
import Header from './header/Header';
import SelectProfile from './header/SelectProfile';
import MenuTopics from './menu/MenuTopics';
import InstructionColumn from './manual/InstructionColumn';
import VideoColumn from './manual/VideoColumn';
import SupportContact from './contact/SupportContact';
import manualData from './json/manualData.json';

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId);
    setSelectedTopic(null);
  };

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
  };

  const selectedProfileData = manualData.profiles.find(
    (profile) => profile.id === selectedProfile
  );

  const selectedTopicData = selectedProfileData?.topics.find(
    (topic) => topic.id === selectedTopic
  );

  return (
    <Container>
      <Header title="Manual de Usuario" />
      <SelectProfile
        profiles={manualData.profiles}
        selectedProfile={selectedProfile}
        onProfileSelect={handleProfileSelect}
      />
      <MenuTopics
        topics={selectedProfileData?.topics}
        activeTopic={selectedTopic}
        onTopicSelect={handleTopicSelect}
      />
      {selectedTopicData && (
        <>
          <InstructionColumn instructions={selectedTopicData.instructions} />
          <VideoColumn videoUrl={selectedTopicData.videoUrl} />
        </>
      )}
      <SupportContact />
    </Container>
  );
};

export default App;

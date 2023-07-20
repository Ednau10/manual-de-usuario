import React, { useState } from 'react';
import { Container, Main } from './App.styled';
import Header from './components/header/Header';
 import SelectProfile from './components/header/SelectProfile';
import Manual from './components/manual/Manual'; // Importamos Manual.jsx aquí
import ContactSupport from './components/contact/ContactSupport';
import manualData from './components/json/manualData.json';

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(manualData.profiles[0].id);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId);
  };

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
  };

  const selectedProfileData = manualData.profiles.find((profile) => profile.id === selectedProfile);

  return (
    <Container>
      <Header title="Manual de Usuario" />
      <SelectProfile profiles={manualData.profiles} onSelectProfile={handleProfileSelect} />
      <Main>
        {selectedProfileData && (
          <Manual // Usamos el componente Manual aquí
            selectedProfile={selectedProfile}
            selectedTopic={selectedTopic}
            handleTopicSelect={handleTopicSelect}
          />
        )}
      </Main>
      <ContactSupport />
    </Container>
  );
};

export default App;

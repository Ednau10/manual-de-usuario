import React from 'react';
import { StyledSelectProfile } from './SelectProfile.styled';

const SelectProfile = ({ profiles, handleProfileChange }) => {
  return (
    <StyledSelectProfile>
      <h2>Elige tu perfil</h2>
      <select onChange={handleProfileChange}>
        <option value="">Selecciona un perfil</option>
        {profiles.map((profile) => (
          <option key={profile.id} value={profile.id}>
            {profile.name}
          </option>
        ))}
      </select>
    </StyledSelectProfile>
  );
};

export default SelectProfile;
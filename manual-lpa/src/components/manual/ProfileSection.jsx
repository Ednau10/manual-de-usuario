// // /scr/components/manual/ProfileSection.jsx
// import React from 'react';
// import { Section, ProfileList, ProfileListItem } from './ProfileSection.styled';

// const ProfileSection = ({ profiles, selectedProfile, handleTopicChange }) => {
//   return (
//     <Section>
//       <h2>Elige tu perfil</h2>
//       <ProfileList>
//         {profiles.map((profile) => (
//           <ProfileListItem
//             key={profile.id}
//             selected={selectedProfile?.id === profile.id}
//             onClick={() => handleTopicChange(profile)}
//           >
//             {profile.name}
//           </ProfileListItem>
//         ))}
//       </ProfileList>
//     </Section>
//   );
// };

// export default ProfileSection;

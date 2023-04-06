import React, { useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState({});

  return (
    <div>
      <h2>Profile</h2>
      <img src={profile.imageUrl} alt={`${profile.name}'s profile`} />
      <h3>{profile.name}</h3>
      <p>{profile.bio}</p>
    </div>
  );
}

export default Profile;

// src/components/pages/Profile.js
import React, { useState, useEffect } from 'react';
import { getProfile } from '../../services/profileService';

function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function fetchProfile() {
      const data = await getProfile();
      setProfile(data);
    }
    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

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

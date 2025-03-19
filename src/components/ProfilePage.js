import React, { useState } from 'react';
import ProfileEditor from './ProfileEditor';
import MessageSystem from './MessageSystem';
import './ProfilePage.css';

const ProfilePage = () => {
  // Example initial profile data.
  const [profile, setProfile] = useState({
    name: 'Your Name',
    photo: 'https://via.placeholder.com/150',
    followers: 240
  });

  const handleProfileUpdate = (updatedData) => {
    setProfile(prev => ({ ...prev, ...updatedData }));
  };

  return (
    <div className="profile-page">
      <div className="profile-info">
        <ProfileEditor 
          initialName={profile.name}
          initialPhoto={profile.photo}
          onProfileUpdate={handleProfileUpdate}
        />
        <div className="followers">
          <h3>{profile.followers} Followers</h3>
          <button>Follow</button>
        </div>
      </div>
      <div className="messages-section">
        <h2>Messages</h2>
        <MessageSystem />
      </div>
    </div>
  );
};

export default ProfilePage;
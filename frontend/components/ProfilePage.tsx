import React, { useState } from 'react';
import ProfileEditor from './ProfileEditor';
import { motion, AnimatePresence } from 'framer-motion';
import './ProfilePage.css';

interface Profile {
  name: string;
  photo: string;
  cover?: string;
  bio?: string;
  followers: number;
}

interface ProfilePageProps {
  profile: Profile;
  onProfileUpdate: (data: Partial<Profile>) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ profile, onProfileUpdate }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="profile-page">
      <img
        src={profile.cover || 'https://via.placeholder.com/800x200?text=Cover+Photo'}
        alt="Cover"
        className="cover-photo"
      />
      <div className="profile-avatar-container">
        <img
          src={profile.photo || 'https://via.placeholder.com/150?text=Profile'}
          alt="Profile"
          className="profile-avatar"
        />
        <motion.button
          onClick={() => setEditMode(prev => !prev)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="edit-btn"
        >
          Edit Profile
        </motion.button>
      </div>
      <div className="profile-info">
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-bio">
          {profile.bio || 'This is your bio. Click edit to customize it.'}
        </p>
        <p className="followers">{profile.followers} Followers</p>
      </div>
      <AnimatePresence>
        {editMode && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ProfileEditor
              initialName={profile.name}
              initialPhoto={profile.photo}
              onProfileUpdate={(data) => {
                onProfileUpdate(data);
                setEditMode(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfilePage;
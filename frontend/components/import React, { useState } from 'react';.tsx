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

  const handleEditToggle = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <div className="profile-page max-w-2xl mx-auto p-4">
      <div className="relative">
        {/* Cover Photo */}
        <img
          src={profile.cover || 'https://via.placeholder.com/800x200?text=Cover+Photo'}
          alt="Cover"
          className="w-full h-40 object-cover rounded-t"
        />
        {/* Profile Picture */}
        <div className="absolute -bottom-12 left-4">
          <img
            src={profile.photo || 'https://via.placeholder.com/150?text=Profile'}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>
        {/* Animated Edit Button */}
        <motion.button
          onClick={handleEditToggle}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="edit-btn absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
        >
          Edit Profile
        </motion.button>
      </div>
      <div className="mt-16 text-center">
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p className="mt-2">
          {profile.bio || 'This is your bio. Click edit to customize it.'}
        </p>
        <p className="mt-2">{profile.followers} Followers</p>
      </div>
      {/* Dynamic Profile Editor */}
      <AnimatePresence>
        {editMode && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
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
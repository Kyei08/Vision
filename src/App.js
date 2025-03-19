import React, { useState } from 'react';
import HomeFeed from './components/HomeFeed';
import ProfilePage from './components/ProfilePage';
import ChatRoom from './components/ChatRoom';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import './App.css';

const App = () => {
  // Global profile and userId.
  const [profile, setProfile] = useState({
    name: 'Your Name',
    photo: 'https://via.placeholder.com/150',
    followers: 240,
    userId: 1
  });
  // View can be: 'home', 'profile', 'chat', 'analytics'
  const [view, setView] = useState('home');

  const handleProfileUpdate = (updatedData) => {
    setProfile(prev => ({ ...prev, ...updatedData }));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Coder Community</h1>
        <nav>
          <button onClick={() => setView('home')}>Home</button>
          <button onClick={() => setView('profile')}>Profile</button>
          <button onClick={() => setView('chat')}>Chat Room</button>
          <button onClick={() => setView('analytics')}>Analytics</button>
        </nav>
      </header>
      {view === 'home' && <HomeFeed />}
      {view === 'profile' && (
        <ProfilePage 
          profile={profile} 
          onProfileUpdate={handleProfileUpdate} 
        />
      )}
      {view === 'chat' && <ChatRoom />}
      {view === 'analytics' && (
        <AnalyticsDashboard 
          userId={profile.userId} 
          userName={profile.name} 
        />
      )}
    </div>
  );
};

export default App;

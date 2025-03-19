import React, { useState, useEffect } from 'react';
import './AnalyticsDashboard.css';

const AnalyticsDashboard = ({ userId, userName }) => {
  const [analytics, setAnalytics] = useState({
    totalUsers: 1500,
    dailyVisits: 300,
    activeProjects: 25,
  });

  // Simulate live analytics updates.
  useEffect(() => {
    const interval = setInterval(() => {
      setAnalytics(prev => ({
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 5),
        dailyVisits: prev.dailyVisits + Math.floor(Math.random() * 3),
        activeProjects: Math.max(1, prev.activeProjects + Math.floor(Math.random() * 3) - 1)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="analytics-dashboard">
      <h2>{userName}'s Analytics</h2>
      <div className="analytics-cards">
        <div className="card">
          <h3>Total Users</h3>
          <p>{analytics.totalUsers}</p>
        </div>
        <div className="card">
          <h3>Daily Visits</h3>
          <p>{analytics.dailyVisits}</p>
        </div>
        <div className="card">
          <h3>Active Projects</h3>
          <p>{analytics.activeProjects}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
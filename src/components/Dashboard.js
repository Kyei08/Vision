import React, { useState, useEffect } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    // Start with one data point.
    const [data, setData] = useState([{
        time: new Date().toLocaleTimeString(),
        totalUsers: 1500,
        dailyVisits: 300,
        activeProjects: 25,
    }]);

    useEffect(() => {
        // Update analytics data every 3 seconds.
        const interval = setInterval(() => {
            setData(prevData => {
                const last = prevData[prevData.length - 1];
                const newEntry = {
                    time: new Date().toLocaleTimeString(),
                    totalUsers: last.totalUsers + Math.floor(Math.random() * 5),
                    dailyVisits: last.dailyVisits + Math.floor(Math.random() * 3),
                    activeProjects: Math.max(1, last.activeProjects + Math.floor(Math.random() * 3) - 1)
                };
                // Keep only the latest 10 data points to avoid overcrowding.
                const newData = [...prevData, newEntry].slice(-10);
                return newData;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dashboard">
            <h2>Analytics Dashboard</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="totalUsers" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="dailyVisits" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="activeProjects" stroke="#ff7300" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Dashboard;
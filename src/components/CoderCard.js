import React from 'react';
import './CoderCard.css';

const CoderCard = ({ coder }) => {
    return (
        <div className="coder-card">
            <img src={coder.profilePic} alt={coder.name} className="profile-pic" />
            <h2>{coder.name}</h2>
            <div className="skills">
                {coder.skills.map(skill => (
                    <span key={skill} className="skill">{skill}</span>
                ))}
            </div>
            {coder.verified && <span className="badge">✔ Verified</span>}
        </div>
    );
};

export default CoderCard;
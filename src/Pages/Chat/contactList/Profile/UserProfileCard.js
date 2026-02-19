import React from 'react';
import './UserProfileCard.css';

const UserProfileCard = ({ contact }) => {
    return (
        <div className="user-profile-card">
            <h3>{contact.name}</h3>
            <p>Last Message: {contact.lastMessage}</p>
            <button className="profile-action">Message</button>
            <button className="profile-action">Block</button>
        </div>
    );
};

export default UserProfileCard;
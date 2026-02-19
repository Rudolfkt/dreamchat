import React, { useState, useEffect } from 'react';
import UserProfileCard from './Profile/UserProfileCard';
import './contactList.css';
import { Avatar } from '@mui/material';

const contacts = [
    { id: 1, name: 'John Doe', lastMessage: 'Siiiiiuuuuuuu' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Cold Palmer better' },
    { id: 3, name: 'Princess Arthur', lastMessage: 'lmfao brooo' },
    { id: 4, name: 'Winston', lastMessage: 'Lol' },
    { id: 5, name: 'Desmond', lastMessage: 'Estevao bettter than Yamal' },
    { id: 6, name: 'Ben', lastMessage: 'Hala Madrid' },
    { id: 7, name: 'Mamba', lastMessage: 'Mamba mentality' },
];

export default function ContactList({ onSelectContact }) {
    const [showUserProfile, setShowUserProfile] = useState(false);
    const [profilePosition, setProfilePosition] = useState({ top: 0, left: 0 });

    const toggleUserProfile = () => {
        const buttonElement = document.querySelector('.profile-photo-btn');
        if (buttonElement) {
            const rect = buttonElement.getBoundingClientRect();
            setProfilePosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
        }
        setShowUserProfile((prev) => !prev);
    };

    return (
        <div className="contact-list">
            <div className="profile-photo-search-bar">
                <button
                    type="button"
                    onClick={toggleUserProfile}
                    aria-label="User profile"
                    className="profile-photo-btn"
                >
                    <Avatar
                        src="https://ui-avatars.com/api/?name=Rudolf&size=45&background=1ebea5&color=fff"
                        alt="Profile"
                        sx={{ width: 40, height: 40 }}
                    />
                </button>

                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                </div>

                {showUserProfile && (
                    <UserProfileCard
                        contact={{
                            name: 'Rudolf',
                            lastMessage: 'This is your profile',
                        }}
                        style={{
                            position: 'absolute',
                            top: `${profilePosition.top}px`,
                            left: `${profilePosition.left}px`,
                        }}
                    />
                )}
            </div>

            <div className="contacts">
                <ul>
                    {contacts.map((contact) => (
                        <li
                            key={contact.id}
                            className="contact-item"
                            onClick={() => onSelectContact(contact)}
                        >
                            <Avatar
                                src={`https://ui-avatars.com/api/?name=${contact.name.replace(' ', '+')}&size=45&background=1ebea5&color=fff`}
                                alt={contact.name}
                                sx={{ width: 45, height: 45 }}
                            />
                            <div className="contact-details">
                                <h4 className="contact-name">{contact.name}</h4>
                                <p className="last-message">{contact.lastMessage}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}












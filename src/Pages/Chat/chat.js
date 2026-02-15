import React from 'react';
import ContactList from './contactList/contactList';
import ChatRoom from './chatRoom/chatRoom';
import './chat.css';

export default function Chat({ showToast }) {
    return (
            <div className="chat-page">
                <ContactList />
                <ChatRoom />
            </div>
    );
}
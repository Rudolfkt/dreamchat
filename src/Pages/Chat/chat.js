import React, { useState } from 'react';
import ContactList from './contactList/contactList';
import ChatRoom from './chatRoom/chatRoom';
import './chat.css';

export default function Chat({ showToast }) {
    const [selectedContact, setSelectedContact] = useState(null);

    return (
            <div className="chat-page">
                <ContactList onSelectContact={setSelectedContact} />
                <ChatRoom contact={selectedContact} />
            </div>
    );
}
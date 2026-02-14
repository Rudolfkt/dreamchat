import React from 'react';
import Header from '../../Components/header';
import ContactList from './contactList/contactList';
import ChatRoom from './chatRoom/chatRoom';
import './chat.css';

export default function Chat({ showToast }) {
    return (
        <>
            <Header />
            <div className="chat-page">
                <ContactList />
                <ChatRoom />
            </div>
        </>
    );
}

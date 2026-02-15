import React, { useState } from 'react';
import './chatRoom.css';

export default function ChatRoom({ contact }) {
    const [message, setMessage] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (message.trim()) {
            console.log('Sending:', message);
            setMessage('');
        }
    };

    // Show placeholder if no contact is selected
    if (!contact) {
        return (
            <div className="chat-room">
                <div className="chat-room-messages">
                    <p className="no-messages">Select a contact to start chatting</p>
                </div>
            </div>
        );
    }

    return (
        <div className="chat-room">
            {/* Chat Header */}
            <div className="chat-room-header">
                <img
                    src={`https://ui-avatars.com/api/?name=${contact.name.replace(' ', '+')}&size=45&background=1ebea5&color=fff`}
                    alt={contact.name}
                    className="chat-room-avatar"
                />
                <div className="chat-room-info">
                    <h3>{contact.name}</h3>
                    <span className="chat-room-status">Online</span>
                </div>

                 <div className="search-chat">
                    <input type="text" placeholder="                                     🔍 Search chat"/>
                </div>
                <div className="more-options">
                    <button type="button"><i className="fa fa-bars"></i></button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="chat-room-messages">
                <p className="no-messages">No messages. Say hello!</p>
            </div>

            {/* Messaging Bar */}
            <form className="chat-room-input" onSubmit={handleSend}>
                <button type="attachment">
                    <i className="fa fa-paperclip" />
                </button>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">
                    <i className="fa fa-paper-plane" />
                </button>
            </form>
        </div>
    );
}

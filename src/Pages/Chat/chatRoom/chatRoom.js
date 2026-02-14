import React, { useState } from 'react';
import './chatRoom.css';

export default function ChatRoom() {
    const [message, setMessage] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (message.trim()) {
            console.log('Sending:', message);
            setMessage('');
        }
    };

    return (
        <div className="chat-room">
            {/* Chat Header */}
            <div className="chat-room-header">
                <img
                    src="https://ui-avatars.com/api/?name=John+Doe&size=45&background=1ebea5&color=fff"
                    alt="Contact"
                    className="chat-room-avatar"
                />
                <div className="chat-room-info">
                    <h3>John Doe</h3>
                    <span className="chat-room-status">Online</span>
                </div>
            </div>

            {/* Messages Area */}
            <div className="chat-room-messages">
                <p className="no-messages">No messages yet. Say hello!</p>
            </div>

            {/* Messaging Bar */}
            <form className="chat-room-input" onSubmit={handleSend}>
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

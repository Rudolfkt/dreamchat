import React, { useState } from 'react';
import './chatRoom.css';
import Options from './options';

export default function ChatRoom({ contact }) {
    const [message, setMessage] = useState('');
    const [showOptions, setShowOptions] = useState(false);

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
            <div className="chat-room-empty">
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
                <div className="more-options" style={{ position: 'relative' }}>
                    <button
                        type="button"
                        onClick={() => setShowOptions((prev) => !prev)}
                        aria-label="More options"
                    >
                        <i className="fa-solid fa-bars" />
                    </button>
                    {showOptions && <Options />}
                </div>
            </div>

            {/* Messages Area */}
            <div className="chat-room-messages">
                <p className="no-messages">No messages. Say hello!</p>
            </div>

            {/* Messaging Bar */}
            <div className="chat-room-input" onSubmit={handleSend}>
                <div className="input-wrapper">
                    <button type="button" className="attachment-btn">
                        <i className="fa fa-paperclip" />
                    </button>
                    <input className='message-input'
                        type="text"
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                     <button type="button" className="microphone-btn">
                        <i className="fa fa-microphone" />
                    </button>
                    <button type="submit" className="send-btn">
                        <i className="fa fa-paper-plane" />
                    </button>
                </div>
            </div>
        </div>
    );
}

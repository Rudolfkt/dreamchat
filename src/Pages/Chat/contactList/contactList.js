import React from 'react';
import './contactList.css';

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

    return (

        <div className="contact-list">

            <div className="profile-photo-search-bar">
                <div className="profile-photo">
                    <img src="https://ui-avatars.com/api/?name=Rudolf&size=45&background=1ebea5&color=fff" alt="Profile" />
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search"/>
                </div>

                <button type="button" className="add-contact-btn">
                    <i className="fa fa-user-plus" />
                </button>
            </div>

            <div className="contacts">
                <ul>
                    {contacts.map((contact) => (
                        <li
                            key={contact.id}
                            className="contact-item"
                            onClick={() => onSelectContact(contact)}
                        >
                            <img
                                src={`https://ui-avatars.com/api/?name=${contact.name.replace(' ', '+')}&size=45&background=1ebea5&color=fff`}
                                alt={contact.name}
                                className="contact-avatar"
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












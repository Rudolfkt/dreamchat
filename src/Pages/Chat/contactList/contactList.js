import React from 'react';
import './contactList.css';

export default function ContactList() {



    return (

        <div className="contact-list">

            <div className="profile-photo-search-bar">
                <div className="profile-photo">
                    <img src="https://via.placeholder.com/50" alt="Profile" />
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="contacts">
                <ul>
                    <li className="contact-item">
                        <img src="https://via.placeholder.com/45" alt="John Doe" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">John Doe</h4>
                            <p className="last-message">hwllo whats good</p>
                        </div>
                    </li>

                    <li className="contact-item">
                        <img src="https://via.placeholder.com/45" alt="Jane Smith" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">Jane Smith</h4>
                            <p className="last-message">See you later!</p>
                        </div>
                    </li>

                    <li className="contact-item">
                        <img src="https://via.placeholder.com/45" alt="Princess Arthur" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">Princess Arthur</h4>
                            <p className="last-message">Okay sounds good</p>
                        </div>
                    </li>

                    <li className="contact-item">
                        <img src="https://via.placeholder.com/45" alt="Winston" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">Winston</h4>
                            <p className="last-message">Lol 😂</p>
                        </div>
                    </li>

                    <li className="contact-item">
                        <img src="https://via.placeholder.com/45" alt="Desmond" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">Desmond</h4>
                            <p className="last-message">On my way</p>
                        </div>
                    </li>

                    <li className="contact-item">
                        <img src="https://via.placeholder.com/45" alt="Ben" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">Ben</h4>
                            <p className="last-message">Thanks bro</p>
                        </div>
                    </li>

                    <li className="contact-item">
                        <img src="https://via.placeholder.com/45" alt="Mamba" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">Mamba</h4>
                            <p className="last-message">Mamba out 🐍</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}












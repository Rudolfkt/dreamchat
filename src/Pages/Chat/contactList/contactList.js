import React from 'react';
import './contactList.css';

export default function ContactList() {



    return (

        <div className="contact-list">

            <div className="profile-photo-search-bar">
                <div className="profile-photo">
                    <img src="https://ui-avatars.com/api/?name=Rudolf&size=45&background=1ebea5&color=fff" alt="Profile" />
                </div>

                <div className="search-bar">
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="contacts">
                <ul>
                    <li className="contact-item">
                        <img src="https://ui-avatars.com/api/?name=John+Doe&size=45&background=1ebea5&color=fff" alt="John Doe" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">John Doe</h4>
                            <p className="last-message">Siiiiiuuuuuuu</p>
                        </div>
                    </li>

                    <li className="contact-item">
                        <img src="https://ui-avatars.com/api/?name=Jane+Smith&size=45&background=1ebea5&color=fff" alt="Jane Smith" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">Jane Smith</h4>
                            <p className="last-message">Cold Palmer better</p>
                        </div>
                    </li>

                    <li className="contact-item">
                        <img src="https://ui-avatars.com/api/?name=Princess+Arthur&size=45&background=1ebea5&color=fff" alt="Princess Arthur" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">Princess Arthur</h4>
                            <p className="last-message">lmfao brooo</p>
                        </div>
                    </li>

                    <li className="contact-item">
                        <img src="https://ui-avatars.com/api/?name=Winston&size=45&background=1ebea5&color=fff" alt="Winston" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">Winston</h4>
                            <p className="last-message">Lol </p>
                        </div>
                    </li>

                    <li className="contact-item">
                        <img src="https://ui-avatars.com/api/?name=Desmond&size=45&background=1ebea5&color=fff" alt="Desmond" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">Desmond</h4>
                            <p className="last-message">Estevao bettter than Yamal</p>
                        </div>
                    </li>

                    <li className="contact-item">
                        <img src="https://ui-avatars.com/api/?name=Ben&size=45&background=1ebea5&color=fff" alt="Ben" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">Ben</h4>
                            <p className="last-message">Hala Madrid</p>
                        </div>
                    </li>

                    <li className="contact-item">
                        <img src="https://ui-avatars.com/api/?name=Mamba&size=45&background=1ebea5&color=fff" alt="Mamba" className="contact-avatar" />
                        <div className="contact-details">
                            <h4 className="contact-name">Mamba</h4>
                            <p className="last-message">Mamba mentality</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}












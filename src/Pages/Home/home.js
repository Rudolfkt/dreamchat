import React from 'react';
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import './home.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="splash-container">
                <div className="splash">
                    <h1 className="splash-head">Vibe Chat</h1>
                    <p className="splash-subhead">
                        Chat with whoever, whenever, wherever
                    </p>
                    <Link to="/Signup" className="get-started-link">
                        <span>Get Started</span>
                        <i className="fa fa-arrow-right" />
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="content-wrapper">
                <div className="content">
                    <h2 className="content-head is-center">
                        Features of DreamChat
                    </h2>

                    <div className="Appfeatures">
                        <div>
                            <h3 className="content-subhead">
                                <i className="fa fa-rocket" />
                                Get Started Quickly
                            </h3>
                            <p>Create an account in seconds and start chatting with friends right away.</p>
                        </div>
                        <div>
                            <h3 className="content-subhead">
                                <i className="fa fa-shield" />
                                Secure Authentication
                            </h3>
                            <p>Powered by Firebase Authentication — your data is safe and encrypted.</p>
                        </div>
                        <div>
                            <h3 className="content-subhead">
                                <i className="fa fa-image" />
                                Share Media
                            </h3>
                            <p>Send images and media to your friends with a tap.</p>
                        </div>
                        <div>
                            <h3 className="content-subhead">
                                <i className="fa fa-bolt" />
                                Real-time Updates
                            </h3>
                            <p>Instant messaging powered by Firestore — messages arrive in real time.</p>
                        </div>
                    </div>

                    {/* Quick Sign-up Form */}
                    <div className="Appfeatures" style={{ justifyContent: 'center' }}>
                        
                            <form className="pure-form pure-form-stacked">
                            
                                    <label htmlFor="email">E-mail</label>
                                    <input id="email" type="email" placeholder="you@gmail.com" />

                                    <label htmlFor="password">Create Password</label>
                                    <input id="password" type="password" placeholder="••••••••" />

                                    <label htmlFor="username">Enter Username</label>
                                    <input id="username" type="text" placeholder="Your Username" />

                                    <button type="submit" className="pure-button">
                                        Sign Up Free
                                    </button>
                                
                            </form>
                        
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}



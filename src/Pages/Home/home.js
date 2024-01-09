import React, { Component } from "react";
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import './home.css';
import Images from '../../ProjectImages/projectimages';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        console.log('HomePage rendered');

        return (
            <>
                <Header/>
                <div className="splash-container">
                    <div className="splash">
                        <h1 className="splash-head">Dream Chat</h1>
                        <p className="splash-subhead">
                            Chat with whoever, whenever, wherever
                        </p>
                        <div>
                            <span>Get Started</span>
                        </div>
                    </div>
                </div>

                <div className="content-wrapper">
                    <div className="content">
                        <h2 className="content-head is-center">Features of chatApp</h2>

                        <div className="Appfeatures">
                            <div className="contenthead">
                                <h3 className="content-subhead">
                                    <i className="fa fa-rocket"></i>
                                    Get Started Quickly
                                </h3>
                                <p>
                                    Just register and dreamchat away
                                </p>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-sign-in"></i>
                                    Firebase Authentication
                                </h3>
                                <p>
                                    Firebase Authentication has been implemented in this app
                                </p>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-th-large"></i>
                                    Media
                                </h3>
                                <p>
                                    Share images with friends
                                </p>
                            </div>
                            <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                <h3 className="content-subhead">
                                    <i className="fa fa-refresh"></i>
                                    Update
                                </h3>
                                <p>
                                    Stay tuned for new features
                                </p>
                            </div>
                        </div>

                        <div className="Appfeatures"> {/* Moved the form section here */}
                            <div className="l-box-lrg pure-u-1 pure-u-md-2-5">
                                <form className="pure-form pure-form-stacked">
                                    <fieldset>
                                        <label htmlFor="email">Your Email</label>
                                        <input id="email" type="email" placeholder="Your Email" />

                                        <label htmlFor="password">Your Password</label>
                                        <input id="password" type="password" placeholder="Your Password" />

                                        <button type="submit" className="pure-button">SignUp</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}



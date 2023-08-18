import React, { Component } from "react";
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Home.css';
import Images from '../../ProjectImages/ProjectImages';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='splash-container'>
                    <div className='splash'>
                        <h1 className='splash-head'>Infinity Chat</h1>
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
                                    <i className=" fa fa-sign-in"></i>
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
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

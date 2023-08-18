import React, { Component } from "react";
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Home.css';
import Images from '../../ProjectImages/ProjectImages';
import { Link } from 'react-router-dom';

export default class HomePage extends Component{
    render(){
        return(
            <>
                <Header />
                <div class='splash-container'>
                    <div class= 'splash'>
                        <h1 class= 'splash-head'>Infinity Chat</h1>
                        <p class="splash-subhead">
                            Chat with whoever, whenever, where ever
                        </p>
                        <div>
                            <span>Get Started</span>
                        </div>
                    </div>       
                </div>

                <div class="content-wrapper" >
                    <div class="content">
                        <h2 class="content-head is-center"> Features of chatApp</h2>

                        <div className="Appfeatures">
                                <div className="contenthead">
                                        <h3 className="content-subhead">
                                            <i class="fa fa-rocket"></i>
                                            Get Started Quickly
                                        </h3>
                                            <p>
                                                just register and dreamchat away
                                            </p>
                                    </div>
                                    <div class="1-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                        <h3 class="content-subhead">
                                            <i class=" fa fa-sign-in" ></i>
                                            Firebase Authentication
                                        </h3>
                                        <p>
                                            Firebase Authentication has been implemented in this app
                                        </p>
                                    </div>
                                    <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                        <h3 class="content-subhead">
                                            <i class="fa fa-th-large"></i>
                                            Media
                                        </h3>
                                        <p>
                                            Share images with friends
                                        </p>
                                    </div>
                                    <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                        <h3 class="content-subhead">
                                            <i class="fa fa-refresh"></i>
                                            Update
                                        </h3>
                                        <p>
                                            stay tuned for new features
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </>
        )
    }
}
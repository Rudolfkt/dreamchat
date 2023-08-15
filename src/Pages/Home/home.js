import React, { Component } from "react";
import Header from ' ../../Components/Header';
import Footer from ' ../../Components/Footer';
import ' .home.css';
import Images from ' ../../ProjectImages/projectImages';
import {Link} from 'react-router-dom';

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
                    </div>

            </div>
            </>
        )
    }
}
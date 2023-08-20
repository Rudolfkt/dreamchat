import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Signup.css';
import firebase from "../../Services/firebase";

import CssBaseline from '@mterial-ui/core/CssBaseline';
import TextFField from '@mterial-ui/core/TextFField';
import Box from '@mterial-ui/core/Box';
import Typography from '@mterial-ui/core/Typography';

export default class SignUp extends Component{}
    constructor();{
        super();
        this.state = {
            email:"",
            password:"",
            name:"",
            error:null

        }
    }
}

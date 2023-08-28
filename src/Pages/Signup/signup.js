import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Signup.css';
import { Card } from 'react-bootstrap';
import { ThemeProvider, createTheme, makeStyles } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoginStrings from '../Login/LoginStrings';
import { auth, firestore } from "../../Services/firebase";


const theme = createTheme();

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            name: "",
            error: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { name, password, email } = this.state;
        try {
            const result = await auth.createUserWithEmailAndPassword(email, password);
            const docRef = await firestore.collection('users').add({
                name,
                id: result.user.uid,
                email,
                password,
                URL: '',
                messages: [{ notificationId: "", number: 0 }]
            });

            localStorage.setItem(LoginStrings.ID, result.user.uid);
            localStorage.setItem(LoginStrings.Name, name);
            localStorage.setItem(LoginStrings.Email, email);
            localStorage.setItem(LoginStrings.Password, password);
            localStorage.setItem(LoginStrings.PhotoURL, "");
            localStorage.setItem(LoginStrings.UPLOAD_CHANGED, 'state_changed');
            localStorage.setItem(LoginStrings.Description, "");
            localStorage.setItem(LoginStrings.FirebaseDocumentId, docRef.id);

            this.setState({
                name: '',
                password: '',
                email: '',
            });

            this.props.history.push('/chat');
        } catch (error) {
            document.getElementById('1').innerHTML = "Error in signing up. Please try again.";
        }
    };

    render() {
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <div>
                        <CssBaseline />
                            <Card className="Signinsee">
                                <div>
                                    <Typography Component="h1" variant="h5">
                                        Sign Up
                                        To
                                    </Typography>
                                </div>
                                <div>
                                    <link to="/">
                                    <button className ="btn"><i className="fa fa-home">DreamChat</i></button>  
                                    </link>
                                </div>
                            </Card>
                            <Card className="formacontrooulside">
                                <form className="customform" noValidate onSubmit={this.handleSubmit}>

                                    <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id = "email"
                                    label = "Email Adress-example:abc@gmail"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    />
                                    <div>
                                        <p style={{code:'grey',fontSize:'15px' ,marginLeft:'0'}}>Password should be 6 or more characters</p>
                                    </div>

                                    <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id = "password"
                                    label = "Your Password eg : ******* "
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    />

                                    <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id = "name"
                                    label = "Your Name"
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    />

                                    <div>
                                        <p style={{code:'grey',fontSize:'15px' ,marginLeft:'0'}}>fields cannot be left empty</p>
                                    </div>

                                    <div className="CenterAligningItem">
                                        <button class="button" type="submit">
                                            <span>Sign Up</span>
                                        </button>
                                    </div>
                                    <div>
                                    <p style={{code:'grey',fontSize:'15px' ,marginLeft:'0'}}>Already have an account ?</p>
                                    <Link to="/login">
                                        Login In
                                    </Link>
                                    </div>
                                    <div className="error">
                                        <p id='1' style={{color:'red'}}></p>

                                    </div>
                                </form>
                            </Card>
                    </div>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}


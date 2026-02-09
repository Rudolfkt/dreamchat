import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
import { Card } from 'react-bootstrap';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoginStrings from '../Login/LoginStrings';
import { auth, firestore } from '../../Services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

const theme = createTheme();

export default function Signup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name: fieldName, value } = e.target;
        if (fieldName === 'email') setEmail(value);
        if (fieldName === 'password') setPassword(value);
        if (fieldName === 'name') setName(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;
            const docRef = await addDoc(collection(firestore, 'users'), {
                name,
                id: uid,
                email,
                password,
                URL: '',
                messages: [{ notificationId: '', number: 0 }],
            });

            localStorage.setItem(LoginStrings.ID, uid);
            localStorage.setItem(LoginStrings.Name, name);
            localStorage.setItem(LoginStrings.Email, email);
            localStorage.setItem(LoginStrings.Password, password);
            localStorage.setItem(LoginStrings.PhotoURL, '');
            localStorage.setItem(LoginStrings.UPLOAD_CHANGED, 'state_changed');
            localStorage.setItem(LoginStrings.Description, '');
            localStorage.setItem(LoginStrings.FirebaseDocumentId, docRef.id);

            // reset form
            setName('');
            setPassword('');
            // navigate to chat
            navigate('/Chat');
        } catch (err) {
            console.error('signup error', err);
            // show the real error message when available
            setError(err?.message || 'Error in signing up. Please try again.');
        }
    };

    const headerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#1ebea5',
        width: '100%',
        boxShadow: '0 5px #808888',
        height: '10rem',
        paddingTop: '48px',
        borderBottom: '5px solid green',
    };

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <div>
                    <CssBaseline />
                    <Card style={headerStyle}>
                        <div>
                            <Typography component="h1" variant="h5">
                                Sign Up To
                            </Typography>
                        </div>
                        <div>
                            <Link to="/">
                                <button className="btn">
                                    <i className="fa fa-home" /> Dream Chat
                                </button>
                            </Link>
                        </div>
                    </Card>

                    <Card className="formacontrooutside">
                        <form className="customform" noValidate onSubmit={handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address - example: abc@gmail.com"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleChange}
                                value={email}
                            />
                            <div>
                                <p style={{ color: 'grey', fontSize: '15px', marginLeft: 0 }}>
                                    Password should be 6 or more characters
                                </p>
                            </div>

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Your Password eg : *******"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                                value={password}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Your Name"
                                name="name"
                                onChange={handleChange}
                                value={name}
                            />

                            <div>
                                <p style={{ color: 'grey', fontSize: '15px' }}>fields cannot be left empty</p>
                            </div>

                            <div className="CenterAliningItems">
                                <button className="btn" type="submit">
                                    <span>Sign Up</span>
                                </button>
                            </div>

                            <div>
                                <p style={{ color: 'grey' }}>Already have an account ?</p>
                                <Link to="/Login">Login In</Link>
                            </div>

                            <div className="error">
                                <p id="1" style={{ color: 'red' }}>{error}</p>
                            </div>
                        </form>
                    </Card>
                </div>
            </React.Fragment>
        </ThemeProvider>
    );
}


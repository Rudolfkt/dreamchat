import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';
import TextField from '@mui/material/TextField';
import LoginStrings from '../Login/LoginStrings';
import { auth, firestore } from '../../Services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

export default function Signup() {
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

            setName('');
            setPassword('');
            navigate('/Chat');
        } catch (err) {
            console.error('signup error', err);
            setError(err?.message || 'Error signing up. Please try again.');
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-header">
                <h1>Create New Account</h1>
                <Link to="/" className="home-btn">
                    <i className="fa fa-home" /> DreamChat
                </Link>
            </div>

            <div className="signup-form-wrapper">
                <form className="signup-form" noValidate onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                        value={email}
                    />

                    <p className="hint-text">Password should be 6 or more characters</p>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
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

                    <button className="submit-btn" type="submit">
                        Sign Up
                    </button>

                    <div className="login-link">
                        <p>Already have an account?</p>
                        <Link to="/Login">Log In</Link>
                    </div>

                    {error && (
                        <p className="error-message">{error}</p>
                    )}
                </form>
            </div>
        </div>
    );
}


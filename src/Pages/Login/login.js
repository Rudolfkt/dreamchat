import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import TextField from '@mui/material/TextField';
import LoginStrings from './LoginStrings';
import { auth } from '../../Services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name: fieldName, value } = e.target;
        if (fieldName === 'email') setEmail(value);
        if (fieldName === 'password') setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;

            localStorage.setItem(LoginStrings.ID, uid);
            localStorage.setItem(LoginStrings.Email, email);

            navigate('/Chat');
        } catch (err) {
            console.error('login error', err);
            setError(err?.message || 'Invalid email or password. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-header">
                <h1>Welcome Back</h1>
                <Link to="/" className="home-btn">
                    <i className="fa fa-home" /> DreamChat
                </Link>
            </div>

            <div className="login-form-wrapper">
                <form className="login-form" noValidate onSubmit={handleSubmit}>
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

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        value={password}
                    />

                    <button className="submit-btn" type="submit">
                        Log In
                    </button>

                    <div className="signup-link">
                        <p>Don't have an account?</p>
                        <Link to="/Signup">Sign Up</Link>
                    </div>

                    {error && (
                        <p className="error-message">{error}</p>
                    )}
                </form>
            </div>
        </div>
    );
}

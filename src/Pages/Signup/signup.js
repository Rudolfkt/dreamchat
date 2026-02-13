import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import TextField from '@mui/material/TextField';
import { useSignup } from '../../hooks/hooks';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { signup, error } = useSignup();

    const handleChange = (e) => {
        const { name: fieldName, value } = e.target;
        if (fieldName === 'email') setEmail(value);
        if (fieldName === 'password') setPassword(value);
        if (fieldName === 'name') setName(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password, name);
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


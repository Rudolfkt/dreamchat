import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header-login-signup">
            <div className="header-limiter">
                <h1><Link to="/">Dream<span>Chat</span></Link></h1>

                <button
                    className="header-menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <i className={menuOpen ? 'fa fa-times' : 'fa fa-bars'} />
                </button>

                <nav className={menuOpen ? 'nav-open' : ''}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link className="selected" to="/" onClick={() => setMenuOpen(false)}>About App</Link>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Contact us</Link>
                </nav>

                <ul>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Signup">Sign Up</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
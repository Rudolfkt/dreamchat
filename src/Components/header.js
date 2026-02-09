import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'

function Header(){
    console.log('header rendered');
    return(
        <header className="header-login-signup">
            <div className="header-limiter">
                <h1><Link to="/Home">Dream<span>Chat</span></Link></h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link className="selected" to="/">About App</Link>
                    <Link to="/">Contact us</Link>
                </nav>
                <ul>
                    <nav>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Signup">Sign Up</Link></li>
                    </nav>
                </ul>
            </div>

        </header>
    )
}
export default Header
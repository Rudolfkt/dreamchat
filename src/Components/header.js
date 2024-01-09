import React from 'react';
import './header.css'
import {Link} from 'react-router-dom'

function Header(){
    console.log('Header rendered');
    return(
        <header class="header-login-signup">
            <div class="header-limiter">
                <h1><a href= "/Home">Dream<span>Chat</span></a></h1>
                <nav>
                    <Link to='/'>Home</Link>
                    <a class="selected"><Link to='/'>About App</Link></a>
                    <a><Link to='/'>Contact us</Link></a>
                </nav>
                <ul>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Signup">Sign Up</Link></li>
                </ul>

            </div>

        </header>
    )
}
export default Header
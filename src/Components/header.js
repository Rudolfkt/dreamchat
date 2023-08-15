import react from 'react';
import 'header.css'
import {Link} from  'react-router-dom'

function Header(){
    return(
        <header className="headerLoginSignup">
            <div className="headerLimiter">
                <h1>
                    <a href= "/Home">Infinity<span>Chat</span></a>
                </h1>
                <nav>
                    <Link to='/'>Home</Link>
                    <a className="selected"><Link to='/'>About App</Link></a>
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
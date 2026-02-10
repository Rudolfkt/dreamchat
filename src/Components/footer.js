import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2>
                © {new Date().getFullYear()} DreamChat — Built with ❤️
            </h2>
        </footer>
    );
}

export default Footer;

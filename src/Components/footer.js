import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    renderCopyright = () => {
        console.log('Footer rendered');
        return (
            <h2 variant="body2" color="textSecondary" align="center">
                {'Copyright @'}
                {'Infinity Chat '}
                {new Date().getFullYear()}
                {'.'}
            </h2>
        );
    }

    render() {
        return (
            <div className="footer 1-box is-center">
                {this.renderCopyright()}
            </div>
        );
    }
}

export default Footer;

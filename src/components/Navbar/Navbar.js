import React from 'react';
import './Navbar.scss';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand" href="">
                <a href="#" className="navbar-brand navbar-item">Andrea Sudharta</a>
                <div className="menu-icon navbar-item">
                    <svg id="hamburger-icon" viewBox="0 0 24 18">
                        <line fill="none" strokeMiterlimit="10" x1="0" y1="2" x2="24" y2="2"></line>
                        <line fill="none" strokeMiterlimit="10" x1="0" y1="9" x2="24" y2="9"></line>
                        <line fill="none" strokeMiterlimit="10" x1="0" y1="16" x2="24" y2="16"></line>
                    </svg>
                </div>
                <ul>
                    <li className="navbar-list navbar-item"><a href="#about-me">Projects</a></li>
                    <li className="navbar-list navbar-item"><a href="#more">About Me</a></li>
                    <li className="navbar-list navbar-item"><a href="#contact">Contact</a></li>
                    <li className="navbar-list navbar-item"><a href="resume.pdf">Resume</a></li>
                    <li className="navbar-list navbar-item"><a href="https://github.com/annsudhart">GitHub</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

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
                    <li className="navbar-list navbar-item"><Link to="#">Projects</Link></li>
                    <li className="navbar-list navbar-item"><Link to="#">About Me</Link></li>
                    <li className="navbar-list navbar-item"><Link to="#">Contact</Link></li>
                    <li className="navbar-list navbar-item"><Link to="/resume.pdf">Resume</Link></li>
                    <li className="navbar-list navbar-item"><Link to="https://github.com/annsudhart">GitHub</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
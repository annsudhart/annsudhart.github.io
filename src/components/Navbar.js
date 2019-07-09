import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand w-100" href="">
                <a className="navbar-brand">Andrea Sudharta</a>
                <ul>
                    <li className="navbar-item">About</li>
                    <li className="navbar-item">Projects</li>
                    <li className="navbar-item">Resume</li>
                    <li className="navbar-item">GitHub</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
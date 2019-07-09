import React from 'react';
import './Arrow.css';
class Arrow extends React.Component {
    render() {
        return (
            <div id="arrow-container">
                <a href="#container">
                    <div id="arrow"></div>
                </a>
            </div>
        );
    }
}

export default Arrow;
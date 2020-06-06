import React from 'react';
import './Arrow.scss';

class Arrow extends React.Component {
    render() {
        return (
            <div id="arrow-container">
                <a href="#">
                    <div id="arrow"></div>
                </a>
            </div>
        );
    }
}

export default Arrow;
import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <li>
            <a  className="flex-item animated fadeInUp"
                id={props.id}
                href={props.href}
            >
                {props.text}
            </a>
        </li>
    );
}

export default Card;
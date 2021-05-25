import React, { useState } from 'react';
import './Arrow.scss';

function Arrow() {

    const [white, setWhite] = useState('');

    return (
        <div id="arrow-container">
            <a 
                href="#" 
                onMouseEnter={() => {setWhite('white')}}
                onMouseLeave={() => {setWhite('')}}
            >
                <div id="arrow" className={`${white}`}></div>
            </a>
        </div>
    );

}

export default Arrow;
import React from 'react';
import './CardContainer.scss';
import Card from '../Card/Card';

function CardContainer(props) {
    return (
        <ul className="flex-container">
            <Card id="maze-rescue" href="http://maze-rescue.com" text="Maze Rescue"/>
            <Card id="truther-tweet" href="https://github.com/annsudhart/truther-tweet" text="US Politician+Twitter Analysis"/>
            <Card id="card-connect" href="https://a10-cardconnect.herokuapp.com/" text="Card Connect"/>
            <Card id="computing-paths" href="http://computingpaths.ucsd.edu" text="Computing Paths"/>
            <Card id="carbon-calc" href="https://github.com/absambam/Carbon-Footprint-Calculator/" text="Carbon Footprint Calculator"/>
            <Card id="any-a" href="https://annsudhart.github.io/hackxx2018/" text="ANY-A"/>
        </ul>
    );
}

export default CardContainer;
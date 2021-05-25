import React from 'react';
import './HackBadge.scss';

function HackathonBadge(props) {
    return (
      <React.Fragment>
        <a className="hexagon" href={props.link}
          style={{"backgroundImage": `${props.imageUrl}`, "backgroundSize": `${props.size}`, "backgroundColor": `${props.color}`}}>
          {props.name}
        </a>
      </React.Fragment>
    );
}

export default HackathonBadge;
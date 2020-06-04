import React from 'react';
import './Splash.scss';

function Splash(props) {
  let splashStyling = {
    backgroundColor: props.color,
    backgroundImage: 'url('+props.image+')'
  }
  return (
    <div 
      className="splash-container" 
      style={splashStyling}>
    </div>
  );
}

export default Splash;
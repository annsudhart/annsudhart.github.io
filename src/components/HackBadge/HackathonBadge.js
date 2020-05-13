import React from 'react';
import './HackathonBadge.scss';

class HackathonBadge extends React.Component {
  render() {
    return (
      <li>
        <div className="hexagon" 
          style={{"backgroundImage": "url('/media/sdhacks-logo.svg')"}}></div>
          SDHacks 2018
      </li>
    );
  }
}

HackathonBadge.propTypes = {
  imageUrl: string,
  link: string,
  ariaLabel: string
}
export default HackathonBadge;
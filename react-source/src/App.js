import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Arrow from './components/Arrow';
import {TwitterTimelineEmbed} from 'react-twitter-embed';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <section className="splash">
        
        <div id="bkgd-img-splash">
          <div style={{"backgroundImage": "url('/img/Liquid-Inv1.svg')", "marginTop": "70px"}}></div>
          <div style={{"backgroundImage": "url('/img/Liquid-Inv2.svg')", "marginTop": "50px"}}></div>
          <div style={{"backgroundImage": "url('/img/Liquid-Inv3.svg')"}}></div>
        </div>
        <div className="splash-container w-100 h-100">
          <div className="row">
            <div>
              <h1>Welcome</h1>
              <p>Nice to meet you. My name is Andrea Sudharta.</p>
              <Arrow/>
            </div>
          </div>
          <div className="row">
            <img id="splashimg" alt="" src="/img/splash_image.svg"/>
          </div>
        </div>
      </section>
      <section id="about-me" className="about">
        <p>
          Welcome to my webpage! I'm Andrea, a third year student in
          UC San Diego studying Math-CS. My interests lie in the intersection
          between human computer interaction and data. Currently, I am a data programmer for the UCSD School of Medicine.
        </p>
        <a target="_blank" href="resume.pdf" className="resume-btn">
          View my resume
        </a>
        <h2>Projects</h2>
        <ul className="flex-container">
          <li><a className="flex-item animated fadeInUp" id="maze-rescue" href="http://maze-rescue.com">Maze Rescue</a></li>
          <li><a className="flex-item animated fadeInUp" id="truther-tweet" href="https://github.com/annsudhart/truther-tweet">US Politician+Twitter Analysis</a></li>
          <li><a className="flex-item animated fadeInUp" id="card-connect" href="https://a10-cardconnect.herokuapp.com/">Card Connect</a></li>
          <li><a className="flex-item animated fadeInUp" id="computing-paths" href="http://computingpaths.ucsd.edu">Computing Paths</a></li>
          <li><a className="flex-item animated fadeInUp" id="carbon-calc" href="https://github.com/absambam/Carbon-Footprint-Calculator/">Carbon Footprint Calculator</a></li>
          <li><a className="flex-item animated fadeInUp" id="any-a" href="https://annsudhart.github.io/hackxx2018/">ANY-A</a></li>
        </ul>
      </section>
      <section id="moreDivider" className="moreDivider">
        <h1>Community Involvement and More</h1>
        <img alt="teamwork" src="/img/community.svg"/>
        <p>
          I am also striving to improve my leadership skills as a chair of 
          my college's residence hall council. Furthermore, I am attending 
          hackathons and technology related events in order to connect with 
          the tech world and improve my skills. Last year, I won first place 
          in HackXX 2018, a hackathon I went to last year.
        </p>
      </section>
      <section className="more">
        <h2>Hackathons I've been to</h2>
        <div className="hex-wrapper">
          <ul>
            <li>
              <div className="hexagon" 
                  style={{"backgroundImage": "url('/img/sdhacks-logo.svg')"}}></div>
              SDHacks 2018
            </li>
            <li>
              <div className="hexagon"
                  style={{"backgroundImage": "url('/img/hackxx-logo.svg')", "backgroundColor": "#941470", "backgroundSize": "70%"}}></div>
              HackXX 2018, 2019
            </li>
            <li>
              <div className="hexagon"
                  style={{"backgroundImage": "url('/img/rosehack-logo.png')", "backgroundSize": "130%"}}></div>
              Rose Hack 2019
            </li>
            <li>
              <div className="hexagon"
                  style={{"backgroundImage": "url('/img/spectra-logo.png')"}}></div>
              Spectra 2.0
            </li>
          </ul>
        </div>
        <h2>Follow me on social media</h2>
        <div className="twitter-frame">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="SudhartaAndrea"
            options={{width: 600, height: 800, margin: 20}}
          />
        </div>
        <script async src="https://platform.twitter.com/widgets.js" 
                charSet="utf-8"></script>
      </section>
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <ul>
          <li>
            <a href="mailto:sudharta.andrea@gmail.com">
              <i className="contact-icon fas fa-envelope" alt="email symbol"></i>
              Email: sudharta.andrea@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/annsudhart">
              <i className="contact-icon fab fa-github"  alt="github symbol"></i>
              Twitter: @SudhartaAndrea
            </a>
          </li>
          <li>
            <a href="https://twitter.com/SudhartaAndrea">
              <i className="contact-icon fab fa-twitter"  alt="twitter symbol"></i>
              Github: annsudhart
            </a>
          </li>
        </ul>
        <p>Made with <span role="img" aria-label="care">💙</span> and <span role="img" aria-label="tacos">🌮</span> using ReactJS. No robots were harmed in the creation of this website ✌️</p>
      </section>
    </div>
  );
}

export default App;
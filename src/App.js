import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Arrow from './components/Arrow';
import Card from './components/Card';
import {TwitterTimelineEmbed} from 'react-twitter-embed';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <section className="splash">
        <div className="splash-container w-100 h-100">
          <div className="row">
            <div>
              <h1>Welcome</h1>
              <p>Nice to meet you. My name is Andrea Sudharta.</p>
              <p className="learn-more">Check out my work!</p>
              <Arrow/>
            </div>
          </div>
          <div className="row">
            <img id="splashimg" alt="" src="/media/splash_image.svg"/>
          </div>
        </div>
      </section>
      <section id="about-me" className="about">
        <p>
          Welcome to my webpage! I'm Andrea, a third year student in
          UC San Diego studying Math-CS. My interests lie in the intersection
          between <span style={{"color": "rgb(37, 178, 244)"}}>human computer interaction</span> and <span style={{"color": "rgb(75, 75, 255)"}}>data</span>. 
          Currently, I am a data programmer for the UCSD School of Medicine and will intern at Verizon Media over the summer.
        </p>
        <a target="_blank" href="resume.pdf" className="resume-btn">
          View my resume
        </a>
        <h2>Projects</h2>
        <ul className="flex-container">
          
          <Card id="maze-rescue" href="http://maze-rescue.com" text="Maze Rescue"/>
          <Card id="truther-tweet" href="https://github.com/annsudhart/truther-tweet" text="US Politician+Twitter Analysis"/>
          <Card id="card-connect" href="https://a10-cardconnect.herokuapp.com/" text="Card Connect"/>
          <Card id="computing-paths" href="http://computingpaths.ucsd.edu" text="Computing Paths"/>
          <Card id="carbon-calc" href="https://github.com/absambam/Carbon-Footprint-Calculator/" text="Carbon Footprint Calculator"/>
          <Card id="any-a" href="https://annsudhart.github.io/hackxx2018/" text="ANY-A"/>
        
        </ul>
      </section>
      <section id="moreDivider" className="moreDivider">
        <h1>Community Involvement and More</h1>
        <img alt="teamwork" src="/media/community.svg"/>
        <p>
          I am also striving to improve my leadership skills, whether if it is
          as the chair of my college's residence hall council, or as an organizer
          for SD Hacks, an annual hackathon at UC San Diego. Furthermore, I am attending 
          hackathons and technology related events in order to connect with 
          the tech world and improve my skills. I won first place 
          in HackXX 2018 and won best Google Cloud Hack at Rose Hack 2019.
        </p>
      </section>
      <section className="more">
        <h2>Hackathons I've been to</h2>
        <div className="hex-wrapper">
          <ul>
            <li>
              <div className="hexagon" 
                  style={{"backgroundImage": "url('/media/sdhacks-logo.svg')"}}></div>
              SDHacks 2018
            </li>
            <li>
              <div className="hexagon"
                  style={{"backgroundImage": "url('/media/hackxx-logo.svg')", "backgroundColor": "#941470", "backgroundSize": "70%"}}></div>
              HackXX 2018, 2019
            </li>
            <li>
              <div className="hexagon"
                  style={{"background": "url('/media/rosehack-logo.png'), #a588bf", "backgroundSize": "140%"}}></div>
              Rose Hack 2019
            </li>
            <li>
              <div className="hexagon"
                  style={{"backgroundImage": "url('/media/spectra-logo.png')"}}></div>
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
            <a href="https://www.linkedin.com/in/andrea-sudharta/">
              <i className="contact-icon fab fa-linkedin-in"  alt="linkedin symbol"></i>
              LinkedIn: andrea-sudharta
            </a>
          </li>
          <li>
            <a href="https://github.com/annsudhart">
              <i className="contact-icon fab fa-github"  alt="github symbol"></i>
              GitHub: annsudhart
            </a>
          </li>
          <li>
            <a href="https://twitter.com/SudhartaAndrea">
              <i className="contact-icon fab fa-twitter"  alt="twitter symbol"></i>
              Twitter: @SudhartaAndrea
            </a>
          </li>
        </ul>
        <p>Made with <span role="img" aria-label="care">💙</span> and <span role="img" aria-label="tacos">🌮</span> using ReactJS. No robots were harmed in the creation of this website ✌️</p>
      </section>
    </div>
  );
}

export default App;

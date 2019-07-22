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
          <div style={{"backgroundImage": "url('/img/Liquid-Inv1.svg')", "margin-top": "70px"}}></div>
          <div style={{"backgroundImage": "url('/img/Liquid-Inv2.svg')", "margin-top": "50px"}}></div>
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
            <img id="splashimg" src="/img/splash_image.svg"/>
          </div>
        </div>
      </section>
      <section className="about">
        <p>
          Welcome to my webpage! I'm Andrea, a third year student in
          UC San Diego studying Math-CS. My interests lie in the intersection
          between human computer interaction and data.
        </p>
        <ul className="flex-container">
          <li><a className="flex-item animated fadeInUp" id="computing-paths" href="http://computingpaths.ucsd.edu">Computing Paths</a></li>
          <li><a className="flex-item animated fadeInUp" id="yonder" href="https://annsudhart.gitub.io/yonder-site/index.html">Yonder Dynamics</a></li>
          <li><a className="flex-item animated fadeInUp" id="carbon-calc" href="https://github.com/absambam/Carbon-Footprint-Calculator/">Carbon Footprint Calculator</a></li>
          <li><a className="flex-item animated fadeInUp" id="any-a" href="https://annsudhart.github.io/hackxx2018/">ANY-A</a></li>
          <li><a className="flex-item animated fadeInUp" id="bookeda" href="https://andrea.schswdd.net/bookeda/index.html">BookEDA</a></li>
          <li><a className="flex-item animated fadeInUp" id="github-link" href="https://github.com/annsudhart">More on GitHub!</a></li>
        </ul>
      </section>
      <section className="moreDivider">
        <h3>Community Involvement and More</h3>
        <img src="/img/community.svg"/>
        <p>
          I am also striving to improve my leadership skills as a chair of 
          my college's residence hall council. Furthermore, I am attending 
          hackathons and technology related events in order to connect with 
          the tech world and improve my skills. Last year, I won first place 
          in HackXX 2018, a hackathon I went to last year.
        </p>
      </section>
      <section className="more">
        <h4>Hackathons I've been to</h4>
        <ul>
          <li>
            <div className="hexagon" 
                 style={{"backgroundImage": "url('/img/sdhacks-logo.svg')"}}></div>
            SDHacks 2018
          </li>
          <li>
            <div className="hexagon"
                 style={{"backgroundImage": "url('/img/hackxx-logo.svg')", "background-color": "#941470", "background-size": "70%"}}></div>
            HackXX 2018, 2019
          </li>
          <li>
            <div className="hexagon"
                 style={{"backgroundImage": "url('/img/rosehack-logo.png')", "background-size": "130%"}}></div>
            Rose Hack 2019
          </li>
          <li>
            <div className="hexagon"
                 style={{"backgroundImage": "url('/img/spectra-logo.png')"}}></div>
            Spectra 2.0
          </li>
        </ul>
        <h4>Follow me on social media</h4>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="SudhartaAndrea"
          options={{width: 600, height: 800}}
        />
        <script async src="https://platform.twitter.com/widgets.js" 
                charset="utf-8"></script>
      </section>
      <section className="contact">
        <h3>Contact</h3>
        <ul>
          <li>
            <a href="mailto:sudharta.andrea@gmail.com">
              <i className="contact-icon fas fa-envelope" alt="email symbol"></i>
              Email: sudharta.andrea@gmail.com
            </a>
          </li>
          <li>
            <a href="twitter.com/SudhartaAndrea">
              <i className="contact-icon fab fa-github"  alt="github symbol"></i>
              Twitter: @SudhartaAndrea
            </a>
          </li>
          <li>
            <a href="github.com/annsudhart">
              <i className="contact-icon fab fa-twitter"  alt="twitter symbol"></i>
              Github: annsudhart
            </a>
          </li>
        </ul>
        <p>Made with 💙 and 🌮 using ReactJS. No robots were harmed in the creation of this website ✌️</p>
      </section>
    </div>
  );
}

export default App;

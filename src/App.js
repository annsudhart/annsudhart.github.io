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
          <div style={{"background-image": "url('/img/Liquid-Inv1.svg')", "margin-top": "100px"}}></div>
          <div style={{"background-image": "url('/img/Liquid-Inv2.svg')", "margin-top": "50px"}}></div>
          <div style={{"background-image": "url('/img/Liquid-Inv3.svg')"}}></div>
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
                 style={{"background-image": "url('/img/sdhacks-logo.svg')"}}></div>
            SDHacks 2018
          </li>
          <li>
            <div className="hexagon"
                 style={{"background-image": "url('/img/hackxx-logo.svg')", "background-color": "#941470", "background-size": "70%"}}></div>
            HackXX 2018, 2019
          </li>
          <li>
            <div className="hexagon"
                 style={{"background-image": "url('/img/rosehack-logo.png')"}}></div>
            Rose Hack 2019
          </li>
          <li>
            <div className="hexagon"
                 style={{"background-image": "url('/img/spectra-logo.png')"}}></div>
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
              <div className="contact-icon"></div>
              Email: sudharta.andrea@gmail.com
            </a>
          </li>
          <li>
            <a href="twitter.com/SudhartaAndrea">
              <div className="contact-icon"></div>
              Twitter: @SudhartaAndrea
            </a>
          </li>
          <li>
            <a href="github.com/annsudhart">
              <div className="contact-icon"></div>
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

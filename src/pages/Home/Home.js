import React from 'react';
import './Home.scss';
import Arrow from '../../components/Arrow/Arrow';
import { Helmet } from 'react-helmet'
import Card from '../../components/Card/Card';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Home() {
  return (
    <div className="content">
        <Helmet>    
            <script src="/parallax.js"></script>
            <script src="/scripts.js"></script>
        </Helmet>
        <section className="splash">
            <div className="splash-container">
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
            Welcome to my webpage! I'm Andrea, a junior software engineer. My interests lie in the intersection
            between <span style={{"color": "rgb(80, 225, 200)"}}>human computer interaction</span> and <span style={{"color": "rgb(75, 75, 255)"}}>data</span>. 
            Starting this summer, I will be working for Yahoo Sports!
            </p>
            <a target="_blank" href="resume.pdf" className="resume-btn">
            View my resume
            </a>
            <h2>Projects</h2>
            <ul className="flex-container">
                <Card id="truther-tweet" href="/#/case-study/politician-tweet" text="US Politician+Twitter Analysis"/>
                <Card id="card-connect" href="/#/case-study/cardconnect" text="Card Connect"/>
            </ul>
        </section>
        <section id="moreDivider" className="moreDivider">
            <h1>Community Involvement and More</h1>
            <img alt="teamwork" src="/media/community.png"/>
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
                    style={{"background": "url('/media/rosehack-logo.png'), #a588bf", "backgroundSize": "150%"}}></div>
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
        <div className="section-divider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs>
                <linearGradient id="contact-gradient" gradientTransform="rotate(90)">
                <stop offset="0%"  stopColor="#4b4bff" />
                <stop offset="30%" stopColor="#9933ff" />
                <stop offset="100%" stopColor="#ff66cc" />
                </linearGradient>
            </defs>
            <path fill="url('#contact-gradient')" fillOpacity="1" d="M0,64L30,80C60,96,120,128,180,154.7C240,181,300,203,360,208C420,213,480,203,540,176C600,149,660,107,720,112C780,117,840,171,900,213.3C960,256,1020,288,1080,298.7C1140,309,1200,299,1260,256C1320,213,1380,139,1410,101.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
            </svg>
        </div>
      </div>
  );
}

export default Home;
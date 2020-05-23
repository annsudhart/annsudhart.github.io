import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import Page404 from './pages/404/404';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/case-study/politician-tweet" render={CaseStudy}/>
          <Route exact path="/" render={Home}></Route>
          <Route render={Page404}/>
        </Switch>
      </Router>      
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

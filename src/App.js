import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Arrow from './components/Arrow';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <section className="splash">
        <img className="splashBackground" src="/img/Liquid-Grape1.svg"/>
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
      <section>
        <h3>Community Involvement and More</h3>
        <p>
          I am also striving to improve my leadership skills as a chair of 
          my college's residence hall council. Furthermore, I am attending 
          hackathons and technology related events in order to connect with 
          the tech world and improve my skills. Last year, I won first place 
          in HackXX 2018, a hackathon I went to last year.
        </p>
      </section>
      <section>
        <h4>Hackathons I've been to</h4>
        <h4>Follow me on social media</h4>
      </section>
      <section>
        <h3>Contact</h3>
      </section>
    </div>
  );
}

export default App;

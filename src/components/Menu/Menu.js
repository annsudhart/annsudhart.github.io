import React from 'react';
import './.scss';
import { Helmet } from 'react-helmet'

function Menu() {
  return (
    <div className="splash-container">
        <a class="animated hamburger bounceInRight">
            <div class="ham top white"></div>
            <div class="ham middle white"></div>
            <div class="ham bottom white"></div>
            <div id="links">
              <ul id="internal-link">
                <li><a href="#title">Top</a></li>
                <li><a href="#overview-tldr">Overview/TLDR</a></li>
                <li><a href="#background">Background</a></li>
                <li><a href="#previous-research">Previous Research</a></li>
                <li><a href="#problem-statement-research-question">Problem Statement</a></li>
                <li><a href="#hypothesis">Hypothesis</a></li>
                <li><a href="#data-analysis-and-gathering">Data Analysis and Gathering</a></li>
                <li><a href="#findings">Findings</a></li>
                <li><a href="#conclusion">Conclusion</a></li>
                <li><a href="#references">References</a></li>
              </ul>
              <div class="line"></div>
              <ul id="external-link">
                  <li><a href="https://annsudhart.github.io">Home</a></li>
                <li><a href="./resume.pdf">Online Resume</a></li>
                <li><a href="https://github.com/annsudhart">GitHub</a></li>
              </ul>
            </div>
        </a>
    </div>
  );
}

export default Menu;
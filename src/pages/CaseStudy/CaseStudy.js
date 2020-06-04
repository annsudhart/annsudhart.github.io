import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import Carousel from '../../components/Carousel/Carousel';
import './CaseStudy.scss';
import Page404 from '../404/404';
import { Helmet } from 'react-helmet';

function CaseStudy(props) {
  // const content;
  // make sure a valid case study name was passed in
  const {projectId} = props.match.params;
  const projectList = ['politician-tweet', 'cardconnect'];
  let projectName = 'Case Study - Andrea Sudharta';
  let projectExists = false;
  let project;
  for (project of projectList) {
    if(projectId === project) {
      projectExists = true;
    }
  }
  if(!projectExists) {
    return <Page404/>
  }

  // list of images for politician-tweet carousel
  const imagesList = [
    'https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/images/tweets-per-bill-1.png', 
    'https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/images/tweets-per-bill-2.png',
    'https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/images/tweets-per-bill-3.png',
    'https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/images/tweets-per-bill-4.png', 
    'https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/images/tweets-per-bill-5.png',
    'https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/images/tweets-per-bill-6.png',
    'https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/images/tweets-per-bill-7.png', 
    'https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/images/tweets-per-bill-8.png',
  ];

  
  const [mdString1, getmdString1] = useState('### Loading...');
  const [mdString2, getmdString2] = useState('### Loading...');
  const [mdString3, getmdString3] = useState('### Loading...');

  useEffect(() => {
    
    // politician-tweet rendering
    if(projectId === 'politician-tweet') {
      projectName = 'Politician Twitter Analysis | Andrea Sudharta';
      fetch('https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/politician-twitter/politician-twitter1.md')
        .then(response => response.text())
        .then(result => getmdString1(result));
      fetch('https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/politician-twitter/politician-twitter2.md')
        .then(response => response.text())
        .then(result => getmdString2(result));
      fetch('https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/politician-twitter/politician-twitter3.md')
        .then(response => response.text())
        .then(result => getmdString3(result));
    } else if(projectId === 'cardconnect') {
      // cardconnect rendering
      projectName = 'Card Connect | Andrea Sudharta';
      fetch('https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/cardconnect/cardconnect1.md')
        .then(response => response.text())
        .then(result => getmdString1(result));
      fetch('https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/cardconnect/cardconnect2.md')
        .then(response => response.text())
        .then(result => getmdString2(result));
      fetch('https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/cardconnect/cardconnect3.md')
        .then(response => response.text())
        .then(result => getmdString3(result));
    }

  });

  const getContent = () => {
    if(projectId === 'politician-tweet'){
      return (
        <div>
          <Markdown source={mdString1}/>
          <Carousel imgList={imagesList}/>
          <Markdown source={mdString2}/>
          <Markdown source={mdString3}/>
        </div>
      )
    } else {
      return (
        <div>
          <Markdown source={mdString1}/>
          <div className="img-set">
            <img src="https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/cardconnect/images/storyboard1.png"/>
            <img src="https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/cardconnect/images/storyboard2.png"/>
            <img src="https://raw.githubusercontent.com/annsudhart/annsudhart.github.io/source/public/case-studies/cardconnect/images/storyboard3.png"/>
          </div>
          <Markdown source={mdString2}/>
          <Markdown source={mdString3}/>
        </div>
      )
    }
  }

  return (
    <div>
      <Helmet>
        <title> {projectName} </title>
      </Helmet>
      <div className="case-study">
        {getContent()}
      </div>
      <div className="section-divider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fillOpacity="1" d="M0,64L30,80C60,96,120,128,180,154.7C240,181,300,203,360,208C420,213,480,203,540,176C600,149,660,107,720,112C780,117,840,171,900,213.3C960,256,1020,288,1080,298.7C1140,309,1200,299,1260,256C1320,213,1380,139,1410,101.3L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z">
                </path>
            </svg>
        </div>
    </div>
  );
}

export default CaseStudy;
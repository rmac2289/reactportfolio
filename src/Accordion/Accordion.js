import React, { useState } from 'react';
import Meal from '../Projects/Meal';
import Hearsay from '../Projects/Hearsay';
import picnic from '../images/picnic.png'
import bullhorn from '../images/bullhorn.png'
import food from '../images/vegetable.png'
import Parkfinder from '../Projects/Parkfinder';
import './Accordion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs, faJs, faHtml5, faCss3, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core';
import badge from '../images/best-project-of-the-week.png'

export default function Accordion() {

  const [oneIsOpen, setOneIsOpen] = useState(true);
  const [twoIsOpen, setTwoIsOpen] = useState(false);
  const [threeIsOpen, setThreeIsOpen] = useState(false);

  const toggleOne = () => setOneIsOpen(!oneIsOpen)
  const toggleTwo = () => setTwoIsOpen(!twoIsOpen)
  const toggleThree = () => setThreeIsOpen(!threeIsOpen)
 
  return (
    <div className="accordion-container">
      <div className="accordion-button" onClick={toggleOne}>
        <div className="accordion-title"><img id="picnic" src={picnic} alt="picnic table" />find your park</div>
        <div className="icon-container">
          <FontAwesomeIcon className="tech-icon" icon={faReact} />
          <FontAwesomeIcon className="tech-icon" icon={faNodeJs} />
          <FontAwesomeIcon className="tech-icon" icon={faJs} />
          <FontAwesomeIcon className="tech-icon" icon={faHtml5} />
          <FontAwesomeIcon className="tech-icon" icon={faCss3} />
          <FontAwesomeIcon className="tech-icon" icon={faGitAlt} />
        </div>
      </div>
      <div className="accordion-sub-title" onClick={toggleOne}>
        <div className="subtitle-box">
        <p className="project-description">A full-stack application for Californians looking to head outdoors. The app allows a user to find
          parks in their area via several different search methods. I built this 
          because of what I saw as a shortage of aggregated data on parks run by different agencies (state,
          national, county, etc.). Through further data aggregation, the app will soon be available for other states. 
        </p>
        <p id="featured-span">
          <img id="badge" src={badge} alt="badge"/>
          <a id="badge-link" href="https://careerkarma.com/blog/projects-spotlight-7-24-2020/" target="_blank" rel="noopener noreferrer">Featured as a project of the week on careerkarma.com.</a>
          </p>
          </div>
        <FontAwesomeIcon className="accordion-icon" icon={!oneIsOpen ? faChevronDown : faChevronUp} />
      </div>
      {oneIsOpen && <div className="accordion-1">
        <Parkfinder />
      </div>}
      <div className="accordion-button" onClick={toggleTwo}>
        <div className="accordion-title"><img id="bullhorn" src={bullhorn} alt="bullhorn icon" />hearsay</div>
        <div className="icon-container">
          <FontAwesomeIcon className="tech-icon" icon={faReact} />
          <FontAwesomeIcon className="tech-icon" icon={faNodeJs} />
          <FontAwesomeIcon className="tech-icon" icon={faJs} />
          <FontAwesomeIcon className="tech-icon" icon={faHtml5} />
          <FontAwesomeIcon className="tech-icon" icon={faCss3} />
          <FontAwesomeIcon className="tech-icon" icon={faGitAlt} />
        </div>
      </div>
      <div className="accordion-sub-title" onClick={toggleTwo}>
        <p className="project-description">Hearsay is a full-stack application built with social justice in mind. Users can log 
          encounters with law enforcement and speak on discussion boards about criminal justice issues. This app
          was built with current events in mind - with so much turmoil and change, I feel we need more venues
          for people to make their voices heard. 
        </p>
        <FontAwesomeIcon className="accordion-icon" icon={!twoIsOpen ? faChevronDown : faChevronUp} />
      </div>
      {twoIsOpen && <div className="accordion-2">
        <Hearsay />
      </div>}
      <div className="accordion-button" onClick={toggleThree}>
        <div className="accordion-title"><img id="food" src={food} alt="food icon"/>meal generator</div>
        <div className="icon-container">
          <FontAwesomeIcon className="tech-icon" icon={faJs} />
          <FontAwesomeIcon className="tech-icon" icon={faHtml5} />
          <FontAwesomeIcon className="tech-icon" icon={faCss3} />
          <FontAwesomeIcon className="tech-icon" icon={faGitAlt} />
        </div>
      </div>
      <div className="accordion-sub-title" onClick={toggleThree}>
        <p className="project-description">The meal generator is a single-page app that allows the user to create a meal plan for the week.
          I built this out of necessity - working full time while learning to code has been tough at times; 
          the meal generator maps out every meal and provides links to recipes, automating a time-consuming task
          for your week. 
        </p>
        <FontAwesomeIcon className="accordion-icon" icon={!threeIsOpen ? faChevronDown : faChevronUp} />
      </div>
      {threeIsOpen && <div className="accordion-3">
        <Meal />
      </div>}

    </div>
  )
}
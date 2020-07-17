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
        <p>full stack app for searching through california parks</p>
        <FontAwesomeIcon className="accordion-icon" icon={!oneIsOpen ? faChevronDown : faChevronUp} />
      </div>
      {oneIsOpen && <div className="accordion-1">
        <Parkfinder />
      </div>}
      <div className="accordion-button" onClick={toggleTwo}>
        <div className="accordion-title"><img id="bullhorn" src={bullhorn} />hearsay</div>
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
        <p>full stack app for reviewing encounters with law enforcement</p>
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
        <p>single page app for meal planning based on diet restrictions</p>
        <FontAwesomeIcon className="accordion-icon" icon={!threeIsOpen ? faChevronDown : faChevronUp} />
      </div>
      {threeIsOpen && <div className="accordion-3">
        <Meal />
      </div>}

    </div>
  )
}
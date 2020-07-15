import React, { useState } from 'react';
import Meal from './Meal';
import Hearsay from './Hearsay';
import Quiz from './Quiz';
import './Accordion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core';

export default function Accordion () {

  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);
  const [threeIsOpen, setThreeIsOpen] = useState(false);

  const toggleOne = () => setOneIsOpen(!oneIsOpen)
  const toggleTwo = () => setTwoIsOpen(!twoIsOpen)
  const toggleThree = () => setThreeIsOpen(!threeIsOpen)
  
  return (
    <div className="accordion-container">
      <div className="accordion-button" onClick={toggleOne}>
        <div className="accordion-title">hearsay</div>
        <FontAwesomeIcon className="accordion-icon" icon={!oneIsOpen ? faChevronDown:faChevronUp}/>
      </div>
      {oneIsOpen && <div className="accordion-1">
        <Hearsay/>
      </div>}
      <div className="accordion-button" onClick={toggleTwo}>
        <div className="accordion-title">meal generator</div>
        <FontAwesomeIcon className="accordion-icon" icon={!twoIsOpen ? faChevronDown:faChevronUp}/>
      </div>
      {twoIsOpen && <div className="accordion-2">
        <Meal/>
      </div>}
      <div className="accordion-button" onClick={toggleThree}>
        <div className="accordion-title">public safety quiz</div>
        <FontAwesomeIcon className="accordion-icon" icon={!threeIsOpen ? faChevronDown:faChevronUp}/>
      </div>
      {threeIsOpen && <div className="accordion-3">
        <Quiz/>
      </div>}

    </div>
  )
}
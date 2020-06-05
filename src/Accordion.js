import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import Meal from './Meal';
import Hearsay from './Hearsay';
import Quiz from './Quiz';
import './Accordion.css';
import { faBullhorn, faAmbulance, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectAccordian(){
    return (
<Accordion id="accordion">
  <Card>
      <Accordion.Toggle  as={Card.Header} variant="link" eventKey="0">
        <div id="toggleclick">Hearsay <span className="accordionicon"><FontAwesomeIcon icon={faBullhorn} /></span></div>
      </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body id="cardbody"><Hearsay /></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
       <div id="toggleclick">Meal Generator<span className="accordionicon"><FontAwesomeIcon icon={faUtensils}/></span></div>
      </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body><Meal /></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
        <div id="toggleclick">Public Safety Quiz<span className="accordionicon"><FontAwesomeIcon icon={faAmbulance} /></span></div>
      </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body><Quiz /></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    )
    }
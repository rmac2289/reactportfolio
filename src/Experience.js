import React from 'react';
import './About.css';
import STORE from './STORE';
import Nav from './Nav';
import Footer from './Footer';
import Burger from './Burger';
import jquery from './images/jquery.png';
import knex from './images/knex.png';
import postgres from './images/postgres.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faJsSquare, faHtml5, faCss3Alt, faGitSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';


export default function Experience(){
    return (
        <div className="App">
        <div id="body">
        <main>
        <Burger id="burger"/>
        <Nav id="nav"/>
        <div className="beforesection1">
            <section className="section2">
                <h4>experience</h4>
                <p>
                    {STORE.paragraphs.experience1}
                    <br/>
                    <br/>
                    {STORE.paragraphs.experience2}
                </p>
                <h4>tech</h4>
                <ul className="techlist">
                    <li className="tech"><FontAwesomeIcon icon={faReact} size="2x"/></li>
                    <li className="tech"><FontAwesomeIcon icon={faNode} size="2x"/></li>
                    <li className="tech"><FontAwesomeIcon icon={faJsSquare} size="2x"/></li>
                    <li className="tech"><FontAwesomeIcon icon={faHtml5} size="2x"/></li>
                    <li className="tech"><FontAwesomeIcon icon={faCss3Alt} size="2x"/></li>
                    <li className="tech"><FontAwesomeIcon icon={faGitSquare} size="2x"/></li>
                    <li className="tech"><FontAwesomeIcon icon={faGithubSquare} size="2x"/></li>
                    <li className="tech" id="express">Express.js</li>
                    <li id="jquery" className="tech"><img src={jquery} alt="jquery"></img></li>
                    <li id="knex" className="tech"><img src={knex} alt="knex" /></li>
                    <li id="postgres" className="tech"><img src={postgres} alt="postgres" /></li>
                    <li className="tech"><FontAwesomeIcon icon={faTerminal} size="2x"/></li>

                </ul>
            </section>
        </div>
        <Footer />
        </main>
        </div>
        </div>
    )
}
import React from 'react';
import './Pitch.css';
import home from '../ParkScreenshots/home.jpg';
import Nav from '../Nav/Nav';
import jquery from '../images/jquery.png';
import knex from '../images/knex.png';
import postgres from '../images/postgres.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faJsSquare, faHtml5, faCss3Alt, faGitSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';

export default function Pitch(){

    return(
        <div>
            <div className="pitch-container">
            <div className="top-half">
                <div className="pitch-header-box">
                    <h2 className="pitch-header">Hi, I'm Ross,</h2>
                    <div className="pitch-p">a full-stack web developer ready to contribute to your team. 
                    Expensify appears to have an outstanding working atmosphere - 
                    I think my personality, experience, and desire to keep learning would 
                    allow me to fit right in. You can check out all of my work on my home
                    page by clicking home in the nav bar.</div>
                </div>
                <div className="media-container">
                    <video id="media" width="500" height="300" controls >
                        <source src="" type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="tech-stack">
                <ul className="pitch-tech-list">
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
            </div>
            <div className="featured-project">
                <div className="media-container">
                    <img id="media" src={home} alt="Find Your Park homepage"/>
                </div>
                <div className="pitch-header-box">
                    <h3 className="pitch-header">Featured Project</h3>
                    <div className="pitch-p">Find Your Park, a full-stack app built using Node.js, React, and PostgreSQL, was recently
                    featured as a project of the week on careerkarma.com. Search for California parks by name,
                    activities offered, or by selecting off the interactive map. Sign up for an account to leave
                    or read comments, or to suggest a park to be added. 
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
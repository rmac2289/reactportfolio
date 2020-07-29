import React from 'react';
import './Pitch.css';
import home from '../ParkScreenshots/home.jpg';
import postgres from './icons8-postgresql-50 (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faJsSquare, faHtml5, faCss3Alt, faGitSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import best from '../images/best-project-of-the-week.png';


export default function Pitch(){

    return(
        <div id="pitch">
        <div className="pitch">
            <div className="pitch-container">
            <div className="top-half">
                <div className="pitch-header-box">
                    <div className="pitch-header-p-box">
                    <h2 className="pitch-header">Hi, I'm Ross,</h2>
                    <div className="pitch-p">a full-stack web developer ready to contribute to your team. 
                    Expensify appears to have an outstanding working atmosphere - 
                    I think my personality, experience, and desire to keep learning would 
                    allow me to fit right in. You can check out all of my work on my home
                    page by clicking the home icon in the footer.</div>
                    </div>
                </div>
                <div className="media-container">
                    <video id="media" width="500" height="300" controls >
                        <source src="" type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="featured-project">
                <div className="media-container">
                    <img id="project-pic" src={home} alt="Find Your Park homepage"/>
                </div>
                <div className="pitch-header-box">                    
                    <div className="pitch-header-p-box-2">
                    <h3 className="pitch-header-2"><a className="pitch-header-2" href="https://findyourpark.netlify.app" target="_blank" rel="noopener noreferrer">Featured Project</a></h3>
                    <div className="pitch-p-2">Find Your Park, a full-stack app built using Node.js, React, and PostgreSQL, was recently
                    featured as a project of the week on careerkarma.com. Search for California parks by name,
                    activities offered, or by selecting off the interactive map. Sign up for an account to leave
                    or read comments, or to suggest a park to be added. 
                    </div>
                    <img id="best" src={best} alt="best project"/>
                    </div>
                </div>
            </div>
            <div className="tech-stack">
                <ul className="pitch-tech-list">
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faReact} size="3x"/></li>
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faNode} size="3x"/></li>
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faJsSquare} size="3x"/></li>
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faHtml5} size="3x"/></li>
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faCss3Alt} size="3x"/></li>
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faGitSquare} size="3x"/></li>
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faTerminal} size="3x"/></li>
                    <li id="pitch-postgres" className="pitch-tech"><img id="postgres-img" src={postgres} alt="postgres" /></li>

                </ul>
            </div>
            </div>
        </div>
        </div>
    )
}


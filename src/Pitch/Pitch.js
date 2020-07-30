import React from 'react';
import './Pitch.css';
import home from '../ParkScreenshots/home.jpg';
import postgres from './icons8-postgresql-50 (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faJsSquare, faHtml5, faCss3Alt, faGitSquare } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faArrowsAltH, faLongArrowAltRight, faLongArrowAltDown, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
import best from '../images/best-project-of-the-week.png';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "rgb(64, 75, 62,0.8)",
      color: 'white',
      padding: 10,
      boxShadow: theme.shadows[1],
      fontSize: 14,
      fontFamily: "Quattrocento",
      marginBottom: 20,
      fontWeight: 900,
    },
  }))(Tooltip);

export default function Pitch(){

    return(
        <div id="pitch">
        <div className="pitch">
            <div className="pitch-container">
            <div className="top-half">
                <div className="pitch-header-box">
                    <div className="pitch-header-p-box">
                    <h2 className="pitch-header">Hi, I'm Ross MacDonald,</h2>
                    <p className="pitch-p">a full-stack web developer ready to contribute to the Expensify team. 
                    You appear to have an outstanding working atmosphere - 
                    I know my personality, experience and desire to keep learning would 
                    allow me to fit right in. You can check out all of my work on my home
                    page by clicking the home icon in the footer. If by then you STILL haven't seen enough, 
                    check out my resume <a id="here" href="https://ross-scott-macdonald.com/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    </div>
                </div>
                <div className="media-container">
                    <FontAwesomeIcon id="arrow-right-1" icon={faLongArrowAltRight} size="3x"/>
                    <FontAwesomeIcon id="arrow-down-1" icon={faLongArrowAltDown} size="3x"/>
                    <video id="media" width="500" height="300" controls >
                        <source src="" type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className="featured-project">
                <div className="media-container">
                <FontAwesomeIcon id="arrow-down-2" icon={faLongArrowAltDown} size="3x"/>
                    <img id="project-pic" src={home} alt="Find Your Park homepage"/>
                </div>
                <div className="pitch-header-box">                    
                    <div className="pitch-header-p-box-2">
                    <FontAwesomeIcon id="caret3" icon={faLongArrowAltLeft} size="3x"/>

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
                <LightTooltip title="React" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faReact} size="3x"/></li>
                </LightTooltip>
                <LightTooltip title="Node.js/Express" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faNode} size="3x"/></li>
                </LightTooltip>
                <LightTooltip title="JavaScript" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faJsSquare} size="3x"/></li>
                </LightTooltip>
                <LightTooltip title="HTML5" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faHtml5} size="3x"/></li>
                </LightTooltip>
                <LightTooltip title="CSS3" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faCss3Alt} size="3x"/></li>
                </LightTooltip>
                <LightTooltip title="Git/Github" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faGitSquare} size="3x"/></li>
                </LightTooltip>
                <LightTooltip title="Command Line" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="pitch-tech"><FontAwesomeIcon color="white" icon={faTerminal} size="3x"/></li>
                </LightTooltip>
                <LightTooltip title="PostgreSQL" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li id="pitch-postgres" className="pitch-tech"><img id="postgres-img" src={postgres} alt="postgres" /></li>
                </LightTooltip>

                </ul>
            </div>
            </div>
        </div>
        </div>
    )
}


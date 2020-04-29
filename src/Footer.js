import React from 'react';
import './Footer.css';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import wordpress from './images/wordpress.png';
import resume from './images/employee.png';
import home from './images/home.png';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <footer role="contentinfo">
            <ul className="icons">
                <li><Link id="home" to="/"><img src={home} alt="home"/></Link></li>
                <li><a id="resume" href="https://ross-scott-macdonald.com/resume" target="_blank" rel="noopener noreferrer"><img src={resume} alt="resume" /></a>
                </li>
                <li><a id="git" href="https://github.com/rmac2289" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
                </li>
                <li><a id="wordpress" href="https://ross-scott-macdonald.com/blog" target="_blank" rel="noopener noreferrer"><img src={wordpress} alt="blog" /></a>
                </li>
                <li><a id="linked" href="https://www.linkedin.com/in/ross-macdonald-0875501a3/" target="_blank" rel="noopener noreferrer"><img
                    src={linkedin} alt="linkedIn" /></a></li>

            </ul>
           
        </footer>
    )
}
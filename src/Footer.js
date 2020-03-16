import React from 'react';
import './Footer.css';
import linkedin from './images/linkedin.png';
import at from './images/at.png';
import github from './images/github.png';
import wordpress from './images/wordpress.png';

export default function Footer() {
    return (
        <footer role="contentinfo">
        <ul className="icons">
            
            <li><a id="git" href="https://github.com/rmac2289" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
            </li>
            <li><a id="linked" href="https://www.linkedin.com/in/ross-macdonald-0875501a3/" target="_blank" rel="noopener noreferrer"><img
                        src={linkedin} alt="linkedIn"/></a></li>
            <li><a id="at" href="mailto:rmac2289@gmail.com" target="_blank" rel="noopener noreferrer"><img src={at} alt="email"/></a>
            </li>
            <li><a id="wordpress" href="https://ross-scott-macdonald.com/blog" target="_blank" rel="noopener noreferrer"><img src={wordpress} alt="blog"/></a>
            </li>
        </ul>
    </footer>
    )
}
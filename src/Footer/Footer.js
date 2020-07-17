import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile, faHome } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

    return (
        <footer className="footer" role="contentinfo">
            <div>
                <p>© 2020 Ross MacDonald</p>
            </div>
            <ul className="icons">
                <li><Link id="home" to="/"><FontAwesomeIcon size="2x" icon={faHome} className="fontawesome" /></Link></li>
                <li><a id="resume" href="https://ross-scott-macdonald.com/resume" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  size="2x" icon={faFile} className="fontawesome"/></a>
                </li>
                <li><a id="git" href="https://github.com/rmac2289" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  size="2x" icon={faGithub} className="fontawesome"/></a>
                </li>
                <li><a id="wordpress" href="https://ross-scott-macdonald.com/blog" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  size="2x" icon={faWordpress} className="fontawesome"/></a>
                </li>
                <li><a id="linked" href="https://www.linkedin.com/in/ross-macdonald-0875501a3/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  size="2x" icon={faLinkedin} className="fontawesome"/></a></li>

            </ul>
           
        </footer>
    )
}
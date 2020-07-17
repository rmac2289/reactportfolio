import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';

export default function Header(){
    return (
<header role="banner">
            <div className="header-box">
            <h1 className="header">ROSS MACDONALD</h1>
            <h2 className="header">full stack web developer in the Portland metro area</h2>
            </div>
            <section className="arrow">
                 <h4 className="latest-work">my latest work</h4>
                 <FontAwesomeIcon size="2x" id="hand-down" icon={faHandPointDown}/>
                
                 </section> 
        </header> 
    )
}
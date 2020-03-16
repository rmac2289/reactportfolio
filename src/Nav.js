import React from 'react';
import './Nav.css';

export default function Nav(){
    return (
        <nav>
        <ul class="links">
            <li><a id="about" href="#">about</a></li>
            <li><a id="blog" href="https://ross-scott-macdonald.com/blog">blog</a></li>
            <li><a id="projects" href="#">portfolio</a></li>
            <li><a id="contact" href="#">contact</a></li>
        </ul>
    </nav>
    )
}

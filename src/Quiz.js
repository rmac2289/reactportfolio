import React from 'react';
import quizapp from './images/quizAppIncorrect.png';
import './projects.css';

export default function Quiz(){
    return (
        <section className="section4">
            <div className="public">
                <h3>public safety quiz</h3>
                <p id="publicsafety">This is a simple quiz application using HTML/CSS and JavaScript via jQuery. I use
                    jQuery to manipulate the DOM in order to:
                    <br/>- Cycle through questions
                    <br/>- Generate questions and answers
                    <br/>- Produce feedback depending on correctness
                    <br/>- Update/display the user's score and question number
                    <br/>- Display final score with a prompt to retry the quiz
                    <br/><br/>
                    <a id="githubLink" className="repoLinks" href="https://github.com/rmac2289/quizApp"
                        target="_blank" rel="noopener noreferrer">{'<github repo>'}</a>
                    <a className="repoLinks" href="https://rmac2289.github.io/quizApp/" target="_blank" rel="noopener noreferrer">{'<take quiz>'}</a>
                </p>
            </div>
            <div className="mealGenerator">
                <img src={quizapp} alt="quiz app incorrect answer"/>
            </div>
        </section>
    )
}
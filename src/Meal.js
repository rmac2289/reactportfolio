import React, { Component } from 'react';
import meal from './images/mealscreenshot.png';
import meal2 from './Screenshots/ingredientscreenshot copy.png';
import meal3 from './Screenshots/listscreenshot.png';
import './projects.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Meal(){
    return (
<section className="section3">
            <div className="public">
                <h3>meal generator</h3>
                <p id="publicsafety">This is an app using HTML/CSS, JavaScript, jQuery and calls to two separate APIs in
                    order to:
                    <br/>- Accept input from the user on diet restrictions
                    <br/>- Produce a list of breakfast, lunch, and dinner for 7 days with links to recipes
                    <br/>- Give the user nutritional information on the daily meals
                    <br/>- Accept input from the user to provide ingedrients that can be substituted for one another
                    <br/><br/>
                    <a id="githubLink" className="repoLinks" href="https://github.com/rmac2289/mealGenerator"
                        target="_blank" rel="noopener noreferrer">{'<github repo>'}</a>
                    <a className="repoLinks" href="https://rmac2289.github.io/mealGenerator/" target="_blank" rel="noopener noreferrer">{'<live app>'}</a>
                </p>
            </div>
            <div className="mealGenerator">
            <Carousel 
            dynamicHeight={true}
            showThumbs={false} 
            showStatus={false} 
            infiniteLoop={true} 
            className="mealScreenshot">
                <div>
                <img src={meal} alt="app landing page"/>
                </div>
                <div>
                <img src={meal2} alt="ingredient menu"/>
                </div>
                <div>
                <img src={meal3} alt="meal list"/>
                </div>
            </Carousel>
            </div>
        </section>
 )
}
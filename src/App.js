import React from 'react';
import Nav from './Nav';
import './App.css';
import Footer from './Footer';
import Aboutexperience from './Aboutexperience';
import Meal from './Meal';
import Quiz from './Quiz';

function App() {
  return (
    <div className="App">
      <body className="body">
    <Nav />
    <main>
        <header role="banner">
            <h1 className="header">HI, I'M ROSS</h1>
            <h2 className="header">full stack web developer in the San Francisco bay area</h2>
        </header>
        <Aboutexperience />
        <section className="projectsHeader">
            <h4>projects</h4>
        </section>
        <Meal />
        <Quiz />    
    </main>
    <Footer />
</body>
    </div>
  );
}

export default App;

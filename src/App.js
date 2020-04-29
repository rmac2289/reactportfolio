import React from 'react';
import Aboutexperience from './Aboutexperience';
import HomePage from './HomePage'
import Contact from './Contact'
import { Route, Switch } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import Projects from './Projects'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/about" component={Aboutexperience}/>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

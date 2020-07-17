import React from 'react';
import About from '../About/About';
import Experience from '../Experience/Experience'
import HomePage from '../HomePage/HomePage'
import Contact from '../Contact/Contact'
import { Route, Switch } from 'react-router-dom'
import PageNotFound from '../PageNotFound/PageNotFound'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

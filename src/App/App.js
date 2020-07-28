import React from 'react';
import About from '../About/About';
import Experience from '../Experience/Experience'
import HomePage from '../HomePage/HomePage'
import Contact from '../Contact/Contact'
import { Route, Switch } from 'react-router-dom'
import PageNotFound from '../PageNotFound/PageNotFound'
import Footer from '../Footer/Footer'
import Pitch from '../Pitch/Pitch';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/pitch" component={Pitch} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

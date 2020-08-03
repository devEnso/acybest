import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//header
import Header from './components/Header/Header';

//body
import Home from './components/Body/Home';
import About from './components/Body/About';
import Portfolio from './components/Body/AllPortfolio';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/hakkımda" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageHome from './Components/PageHome';
import PagePlay from './Components/PagePlay';
import PageLearn from './Components/PageLearn';
import PageFind from './Components/PageFind';
import PageInfosShelter from './Components/PageInfosShelter';
import PageAddShelter from './Components/PageAddShelter';

import './css/App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
          <Switch>
            
            <Route exact path="/" component={PageHome}/>
            <Route exact path="/jouer" component={PagePlay}/>
            <Route exact path="/apprendre" component={PageLearn}/>
            <Route exact path="/trouver" component={PageFind}/>
            <Route exact path="/trouver/infos" component={PageInfosShelter}/>
            <Route exact path="/trouver/ajouter" component={PageAddShelter}/>
            
          </Switch>
      </Router>
    );
  }
}

export default App;

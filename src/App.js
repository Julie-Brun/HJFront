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
  constructor(props) {
    super(props);

    this.state= {
        toHome: false
    };
    
    this.redirectToHome = this.redirectToHome.bind(this);
  };

  redirectToHome() {
    console.log(this.state.toHome);
    this.setState({
        toHome: true
    });
  };

  render() {
    return (
      <Router>
          <Switch>
            
            <Route exact path="/" render={(props) => <PageHome {...props} toHome={this.state.toHome} redirectToHome={this.redirectToHome}/>}/>
            <Route exact path="/jouer" render={(props) => <PagePlay {...props} toHome={this.state.toHome} redirectToHome={this.redirectToHome}/>}/>
            <Route exact path="/apprendre" render={(props) => <PageLearn {...props} toHome={this.state.toHome} redirectToHome={this.redirectToHome}/>}/>
            <Route exact path="/trouver" render={(props) => <PageFind {...props} toHome={this.state.toHome} redirectToHome={this.redirectToHome}/>}/>
            <Route exact path="/trouver/infos" render={(props) => <PageInfosShelter {...props} toHome={this.state.toHome} redirectToHome={this.redirectToHome}/>}/>
            <Route exact path="/trouver/ajouter" render={(props) => <PageAddShelter {...props} toHome={this.state.toHome} redirectToHome={this.redirectToHome}/>}/>
            
          </Switch>
      </Router>
    );
  }
}

export default App;

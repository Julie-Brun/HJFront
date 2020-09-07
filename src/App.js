import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageHome from './Components/PageHome';
import PagePlay from './Components/PagePlay';
import PageLearn from './Components/PageLearn';
import PageFind from './Components/PageFind';
import PageInfosShelter from './Components/PageInfosShelter';
import PageAddShelter from './Components/PageAddShelter';
import PageLogIn from './Components/PageLogIn';
import PageHomeAdmins from './Components/PageHomeAdmins';
import PageManageAdmins from './Components/PageManageAdmins';
import PageRegister from './Components/PageRegister';
import PageManageShelters from './Components/PageManageShelters';
import PageLogOut from './Components/PageLogOut';

import ProtectedRoute from './Components/ProtectedRoute';

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
            
            <Route exact path="/admin/login" render={(props) => <PageLogIn {...props} toHome={this.state.toHome} redirectToHome={this.redirectToHome}/>}/>
            <ProtectedRoute exact path="/admin/home" component={PageHomeAdmins} isLoggedIn={this.state.isLoggedIn}/>
            <ProtectedRoute exact path="/admin/admins" component={PageManageAdmins} isLoggedIn={this.state.isLoggedIn}/>
            <ProtectedRoute exact path="/admin/admins/register" component={PageRegister} isLoggedIn={this.state.isLoggedIn}/>
            <ProtectedRoute exact path="/admin/shelters" component={PageManageShelters} isLoggedIn={this.state.isLoggedIn}/>
            <ProtectedRoute exact path="/admin/logout" component={PageLogOut} isLoggedIn={this.state.isLoggedIn}/>
          </Switch>
      </Router>
    );
  };
};

export default App;

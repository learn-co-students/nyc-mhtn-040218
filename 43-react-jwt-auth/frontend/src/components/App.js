import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Welcome from './Welcome';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Snacks from './Snacks';
import MySnacks from './MySnacks';
import Adapter from './Adapter'

class App extends Component {
  state = {
    token: ""
  }
  render() {
    return (
        <div className="App">
          <NavBar />

          <Route exact path="/" render={(props) => <Welcome {...props} />} />
          {
            Adapter.loggedIn() ?
              <React.Fragment>
                <Route exact path="/register" render={(props) => <RegistrationForm {...props} /> } />
                <Route exact path="/login" render={(props) => <LoginForm {...props} /> } />
              </React.Fragment>
            :
              <Redirect to="/"/>
          }

          <Route exact path="/snacks" component={Snacks} />
          <Route exact path="/my-snacks" component={MySnacks} />
        </div>
    );
  }
}

export default App;

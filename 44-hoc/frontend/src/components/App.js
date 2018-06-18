import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Welcome from './Welcome';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Snacks from './Snacks';
import MySnacks from './MySnacks';
// import Adapter from './Adapter'
// import withLoading from '../hocs/withLoading';
// import withAuth from '../hocs/withAuth';

class App extends Component {
  state = {
    token: ""
  }

  render() {
    return (
        <div className="App">
          <NavBar />

          {/*
            By using HOCs to "protect" our components (think of them as pages),
            we no longer need to worry about the if/else pathing logic here.
            We can just declaratively write our routes and know that they work.
          */}
          <Route exact path="/" render={(props) => <Welcome {...props} />} />
          <Route exact path="/register" render={(props) => <RegistrationForm {...props} /> } />
          <Route exact path="/login" render={(props) => <LoginForm {...props} /> } />
          <Route exact path="/snacks" component={Snacks} />
          <Route exact path="/my-snacks" component={MySnacks} />

          {/*
            This is what we want to abstract away with a HOC.

            Adapter.loggedIn() ?
              <React.Fragment>
                <Route exact path="/register" render={(props) => <RegistrationForm {...props} /> } />
                <Route exact path="/login" render={(props) => <LoginForm {...props} /> } />
              </React.Fragment>
            :
              <Redirect to="/"/>
          */}

          {/*
            This doesn't work because we can't just pass in <> stuff into withAuth.

          {withAuth(<Route exact path="/register" render={(props) => <RegistrationForm {...props} /> } />)}
          {withAuth(<Route exact path="/login" render={(props) => <LoginForm {...props} /> } />)}
          */}
        </div>
    );
  }
}

export default App;

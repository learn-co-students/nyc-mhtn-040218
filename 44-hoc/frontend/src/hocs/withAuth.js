import React from 'react';
// import { Redirect } from 'react-router-dom';
import Adapter from '../components/Adapter'

function withAuth(WrappedComponent) {
  return class extends React.Component {
    // Functionality #1
    // ================
    // We want every component that uses withAuth
    //   (aka: requires_login if we're thinking
    //   about how we named it in Rails)
    // to kick the user back to / if they are already
    // logged in.
    // This is for our LoginForm and RegistrationForm.
    componentDidMount() {
      // This is what we wrote in class.
      if(Adapter.loggedIn()) {
        console.log('redirect me!')
        this.props.history.push("/");
      }
    }
    // Functionality #2
    // ================
    // Try this on your own!
    //
    // Imagine we want to have a HOC, this one or another,
    // that protects pages that require logins.
    // So when visiting those pages, instead of pushing "/",
    // we instead push them to "/login".
    // How would you go about designing this???
    // Would you want to rename this HOC?

    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}

export default withAuth;

import React from 'react';

// Explanation
// ===========
// Higher Order Components can take more than just another
// component as args/params.
// The common pattern we want to abstract in withLoading
// is the idea that we need to:
//     do a setState after a fetch in componentDidMount
// That's what we'll abstract away here and instead
// of rendering an empty array, we'll show a loading gif instead!

// To Test It
// ==========
// Throw a byebug in the controller actions for snacks and my snacks.
// While in byebug, we should see the loading GIF.
// If you then type `continue` in byebug to continue with the action,
// data should be sent back and we should see our loading component!

// dataLoader should be a Promise that we can run in componentDidMount.
// It's result is the data we will now pass down as props into
// our component. That way, the component can initialize state with
// data without ever having to render [] or do anything with componentDidMount.
function withLoading(WrappedComponent, dataLoader) {
  return class extends React.Component {
    state = {
      isLoading: true,  // Until this is flipped, we show the GIF.
      data: null,       // Eventual data we get back from dataLoader
    }

    // What we've now abstracted.
    componentDidMount() {
      dataLoader()
        .then(data => { // <-- Got our data back.
          this.setState({ data }, () => { // <-- Set our data.
             // In callback.
             // data is set, so let's flip the switch and render WrappedComponent
            this.isLoaded();
          });
        });
    }

    // Method to flip the switch.
    isLoaded = () => {
      this.setState({
        isLoading: false,
      })
    }

    render() {
      // Show a GIF while not loaded.
      if (this.state.isLoading) {
        // return <p>Spinny GIF</p>
        // I found a spinny gif!
        return <img alt="Spinny GIF" src="https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />
      } else {
        // If we get here, then this.state.data has something to pass down.
        // So we pass it down as a prop called initialData.
        // Every component that uses this HOC will get some initialData.
        return <WrappedComponent {...this.props} initialData={this.state.data} />
      }
    }

    // The idea that didn't work as expected...
    // render() {
    //   console.log('WrappedComponent', this.props);
    //   return (
    //     <React.Fragment>
    //     {
    //       this.state.isLoading ?
    //         <p>Spinny GIF</p>
    //       :
    //         <WrappedComponent {...this.props} isLoaded={this.isLoaded} />
    //     }
    //     </React.Fragment>
    //   )
    // }
  }
}

export default withLoading;

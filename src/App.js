import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantsContainer from './containers/RestaurantsContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      auth: {
        isLoggedIn: true,
        token: 'Bay1mxnKcjQq5Gw0OH0NBQgFurrIS5E-C8FZv4ZbcRt9u6PGTKJqZMz_E9zgOKfHGkgzeHjpxI3QlgbxRel4lQvoACI12ndRAcUwNflVraiQnS4SySXb__bdsLeRWXYx'
      }
    }
    this.login = this.login.bind(this)
  }

  render() {
    return (
      <div className="App">
        <RestaurantsContainer token={this.state.token} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantsContainer from './containers/RestaurantsContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      auth: {
        isLoggedIn: false,
        token: {}
      }
    }
    this.login = this.login.bind(this)
  }

  render() {
    return (
      <div className="App">
        <RestaurantsContainer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AuthAdapter } from './adapters'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
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

  login(params){
    AuthAdapter.login(params)
      .then(res => this.setState({
        auth: {
          isLoggedIn: true,
          token: res.token
        }
      }))
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <LoginForm onSubmit={this.login} />
        <RestaurantsContainer />
      </div>
    );
  }
}

export default App;

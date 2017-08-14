import React, { Component } from 'react'

export default class LoginForm extends Component {
  constructor(){
    super()
    this.state = {
      clientId: '',
      clientSecret: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({
      clientId: '',
      clientSecret: ''
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="clientId" value={this.state.clientId} onChange={this.handleChange} />
        <input type="password" name="clientSecret" value={this.state.clientSecret} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    )
  }
}

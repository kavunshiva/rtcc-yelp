import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class SearchBar extends Component {
  constructor(){
    super()
    this.state = {
      searchTerm: '',
      topRated: false,
      lowestCost: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheckboxChange(e, data){
    const { name } = data
    this.setState(prevState => {
      return {
        [name]: !prevState[name]
      }
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const searchParams = {
      location: this.state.searchTerm
    }
    if(this.state.topRated){
      searchParams.sort_by = 'rating'
    }
    if(this.state.lowestCost){
      searchParams.price = '1'
    }
    this.props.onSubmit(searchParams)
  }

  render(){
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>City</label>
          <input name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='top rated' name="topRated" checked={this.state.topRated} onChange={this.handleCheckboxChange} />
        </Form.Field>
        <Form.Field>
          <Checkbox label='lowest cost' name="lowestCost" checked={this.state.lowestCost} onChange={this.handleCheckboxChange} />
        </Form.Field>
        <Form.Field>
          <Button type="submit" fluid>Submit</Button>
        </Form.Field>
      </Form>
    )
  }
}

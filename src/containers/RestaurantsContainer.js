import React, { Component } from 'react'
import { RestaurantsAdapter } from '../adapters'
import SearchBar from '../components/SearchBar'
import RestaurantsPage from '../components/RestaurantsPage'
import { Divider } from 'semantic-ui-react'

export default class RestaurantsContainer extends Component {
  constructor(){
    super()
    this.state = {
      restaurants: {},
      searching: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(params){
    this.setState({
      searching: true
    })
    RestaurantsAdapter.getRestaurantsByCity(params)
      .then(restaurants => this.setState({
        restaurants: restaurants.businesses,
        searching: false
      }))
  }

  render(){
    return (
      <div>
        <SearchBar onSubmit={this.handleSearch} />
        <Divider />
        <RestaurantsPage restaurants={this.state.restaurants} searching={this.state.searching}/>
      </div>
    )
  }
}

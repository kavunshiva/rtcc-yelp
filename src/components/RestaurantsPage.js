import React from 'react'
import RestaurantsHeaders from './RestaurantsHeaders'
import RestaurantsList from './RestaurantsList'

const RestaurantsPage = (props) =>  {
    return (
      <div>
        <RestaurantsHeaders />
        <RestaurantsList restaurants={props.restaurants} searching={props.searching}/>
      </div>
    )
}

export default RestaurantsPage

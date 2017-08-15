import React from 'react'
import { Grid, Loader } from 'semantic-ui-react'

const RestaurantsList = (props) => {
  return (
    <Grid columns={3}>
      {props.searching ? <Loader active /> : null}
      {
        props.restaurants && !!props.restaurants.length > 0 ? props.restaurants.map(restaurant => {
          return (
            <Grid.Row key={restaurant.id}>
              <Grid.Column><a href={restaurant.url}>{restaurant.name}</a></Grid.Column>
              <Grid.Column>{restaurant.price}</Grid.Column>
              <Grid.Column>{restaurant.rating}</Grid.Column>
            </Grid.Row>
          )
        }) : null
      }
    </Grid>
  )
}

export default RestaurantsList

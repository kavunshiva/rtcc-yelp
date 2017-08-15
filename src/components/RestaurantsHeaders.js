import React from 'react'
import { Grid } from 'semantic-ui-react'

const RestaurantsHeaders = () => {
  return (
    <Grid columns={3} celled>
      <Grid.Column>
        Restaurant
      </Grid.Column>
      <Grid.Column>
        Price
      </Grid.Column>
      <Grid.Column>
        Rating
      </Grid.Column>
    </Grid>
  )
}

export default RestaurantsHeaders

// const yelpAuthUrl = "https://api.yelp.com/oauth2/token"
// const yelpSearchApi = 'http://localhost:3000/api/v1/restaurants/search'
const yelpSearchApi = 'https://rtcc-yelp-api.herokuapp.com/api/v1/restaurants/search'

const parseParams = (params) => {
  let query = `?location=${params.location}`
  Object.keys(params).map(param => {
    if(param !== 'location'){
      query += `&${param}=${params[param]}`
    }
  })
  return query
}

export class RestaurantsAdapter {
  static getRestaurantsByCity(params){
    const searchUrl = yelpSearchApi + parseParams(params)
    return fetch(searchUrl).then(res => res.json())
  }

}

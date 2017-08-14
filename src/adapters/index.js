const yelpAuthUrl = "https://api.yelp.com/oauth2/token"

let token = ''

const headers = () => (
  {
    'comtent-type': 'application/x-www-form-urlencoded',
    'Authorization': `Bearer ${token}`
  }
)

export class AuthAdapter {
  static login(params){
    return fetch(yelpAuthUrl, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        'grant_type': 'client_credentials',
        'client_id': params.clientId,
        'client_secret': params.clientSecret
      })
    }).then(res => res.json())
  }
}

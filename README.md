# Rowan Technologies Code Challenge

## Assignment
Please build a web application that provides an easy to use, sortable interface for finding restaurants based on Yelp! data.

*Minimum App Features:*

+ Use the Yelp! Api to retrieve data on restaurants
+ Allow users to search for restaurants by city
+ Allow sorting by price and rating
+ Display 20 restaurants at a time, with each linked to the yelp page for that restaurant
+ Any features beyond this are optional

*Notes:*

+ Feel free to use whatever frameworks or technologies you feel are best suited to this task
+ Please set up your project as a Git repo and follow normal Git practices while building it
+ Treat this as much as possible as a production oriented application
+ Your solution should include instructions for setting up and running the application, and optionally should point to a publically hosted version of the app

## Setup
1. Get a client ID and secret from Yelp. Per [Yelp's authentication documentation](https://www.yelp.com/developers/documentation/v3/authentication), go to their [Create App page](https://www.yelp.com/developers/v3/manage_app) and enter the information relevant to the app (you will need [to be logged in to] a Yelp account for this). Save the client ID and secret, as you'll use them as your login to the app.
2. Run `npm install` and then `npm start` from the command line to download necessary libraries and then run a development version of the app locally.
3. Navigate to the local address listed in the console (if you haven't been redirected already).

## Use
1. Log in using the client ID and secret from Yelp. (In addition to logging you in to the app, this will get and locally cache the Yelp API access token necessary for making all subsequent API calls.)

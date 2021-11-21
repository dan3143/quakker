# Quakker

A twitter-like app made in React, but instead of "tweets" they're called "quaks".

It supports:
- Authentication
- Creating and deleting quaks
- Liking quaks
- Commenting quaks
- Searching for quaks
- Seeing an user's quaks

It is deployed [in heroku](https://quakker-app.herokuapp.com/), and uses an API based on [jestrade/api-twitter](https://github.com/jestrade/api-twitter).

To run it in a development environment, first clone the API at [dan3143/api-twitter](https://github.com/dan3143/api-twitter) and add the appropriate variables to the `.env` file, then run `node index.js`. After the backend is running, you can clone this repo, add a `.env` file with `REACT_APP_HTTP_API` pointing to the API url and run `yarn install` followed by `yarn dev`. 

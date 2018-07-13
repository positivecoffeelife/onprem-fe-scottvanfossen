## Something simple, yet useful...
I figured I'd show off a React setup using your typical stack technologies. It is an Employee Data app that simply records, edits, or deletes a user and his/her info. I wiped the slate clean and went with an Apollo/GraphQL/MongoDB/React setup.  The MondoDB is using an Amazon AWS free, cloud-based database, using MLab.com.  It's a fast setup, mimics more future tech and transitions/direction of many companies.  It's also a trim, modular, file setup.

## Is it perfect? No.
I fully acklowledge through my own observations that there are little idiocincricies within the design. Certain error-handling, date formatting, or Date Type usage (or lack of it), some state controllers, etc could all be tightened up and hammered out.  In a simplistic form, I definitely think it shows some basic functionality; it goes without saying that during production builds, a real product better survive pen tests appropriately and should be coded towards to begin with.  You can view it in action here:  `https://youtu.be/lrVTGfBZnF4`

## Packages I Used
- apollo-client
- react
- react-apollo
- react-router
- graphql
- graphql-tag
- graphql-date
- mongoose
- mongodb
- mongodb-core
- nodemon
- lodash
- express
- express-graphql
- body-parser
- webpack
- webpack-dev-middleware
- https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css
- http://fonts.googleapis.com/icon?family=Material+Icons

## Run it
#### Install
cd to the root directory, then 
`npm install`
#### Specific packages
`npm install --save mongoose mongodb mongodb-core nodemon lodash express express-graphql body-parser webpack webpack-dev-middleware apollo apollo-client react react-apollo react-router graphql graphql-tag graphql-date babel-loader babel-preset-react express-graphql`

#### You'll need this file
Create a file under the root directory called `.babelrc` and within it, place the contents: `{
    "presets": [
      "react"
    ]
  }` then save the file.

#### Start it up
`npm run local` spools up the dev instance of the application located at http://localhost:3000/#/

# Thanks for taking a peek

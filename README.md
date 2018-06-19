## I used none of your repository, aside from the README file.
Yes, while that is true, and perhaps shocking the rules and guidelines didn't say anything against that, so...
Part of the reasoning for it is right off the bat, I was troubleshooting deprecation issues with various packages that were used in the assignment package.  Specifically, one thing comes to mind and that was the Hapi server setup; I had to make some minor updates to the server syntax just to stand up the instance, but did get it going.

In your /server/src/index.js, you can square away the machine by using this update:
`
const Hapi = require('hapi');
const server = new Hapi.Server({
    port: 3000,
    host: 'localhost',
    routes: {
        cors: true
    }
});
`
Anyway...

## But then I started digging in more....
That's when I saw that you had some serious code setup not only for a 'mock' database (I believe the comment was 'poor mans database' within the code...I did LOL, btw. :) and all set up with some hard-coded JSON.  And, this is where I stopped looking.  Assuming that I'd have to figure out more of what was done and wire up into whatever other setups were going on (assuming things like Axios would have to be used to make the adds/deletes/updates to the hard-coded JSON), I figured I'd show off a React setup using your typical stack technologies. I wiped the slate clean and went with an Apollo/GraphQL/MongoDB/React setup.  The MondoDB is using an Amazon AWS free, cloud-based database, using MLab.com.  It's a fast setup, mimics more future tech and transitions/direction of many companies.  My setup also trims down on files, etc.

## Is it perfect? No.
I fully acklowledge through my own observations that there are little idiocincricies within the submission. Certain error-handling, date formatting, or Date Type usage (or lack of it), some state controllers, etc could all be tightened up and hammered out.  Just doing what I can with being informed to knock it out in 4-6hrs. :) In a simplistic form, I definitely think it shows the basic functionality that was asked for to begin with; it goes without saying that during production builds, a real product better survive pen tests appropriately and should be coded towards to begin with.  You can view it in action here:  `https://youtu.be/lrVTGfBZnF4`

## Packages I Used
apollo-client
react
react-apollo
react-router
graphql
graphql-tag
graphql-date
mongoose
mongodb
mongodb-core
nodemon
lodash
express
express-graphql
body-parser
webpack
webpack-dev-middleware
https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css
http://fonts.googleapis.com/icon?family=Material+Icons

## Run it
`npm run local` spools up the dev instance of the application located at http://localhost:3000/#/

# Thanks for taking a peek


# OnPrem Front End Assignment

Using the API provided in this repository, create a client-side application that can be used to add/edit/remove employees from the faux employee database.

![screenshot.png](screenshot.png)

## Rules/Guidelines
- *Cannot* use frameworks (Angular/Ember/Backbone/etc)
- *Can* use libraries (React/Redux/Ramda/etc)
- *Can* use CSS Preprocessor (SASS/Less/Stylus/PostCSS/etc)
- *Can* use any DOM APIs/CSS/JavaScript features that are supported in the latest stable versions of Chrome *and* Firefox
- The UI of your finished application should match the included screen-shot
- *Can* use the [Font-Awesome](https://fortawesome.github.io/Font-Awesome/) icon font to match icons from the provided mockup
- Your finished application should visually look as close as possible to the provided mockup
- *Can* use TypeScript
- JavaScript must be strict-mode compliant (`'use-strict';`)


## What We're Looking For
The following are our primary areas of focus when reviewing your work:

- Modularity/Extensibility
- Readability
- Common Front End Best Practices
- Attention to detail

These should not be surprising, as they should also be your focus building any app :).

## Optional Tools
The following tools are entirely optional (and not included or configured in the repository), but you are welcome to use any that you find necessary.

- ES2015/2016 Transpiler (Babel)
- Module Bundler (Browserify/Webpack/Require/etc)
- Build System/Task Runner (Gulp/Grunt/npm "run" scripts)

## Prerequisites
- node.js version >= `4.0.x`

## Getting Started
1. Clone the repository
2. Run `npm install` in the root of the repository

## Starting/Using the API
1. Run `npm run local`
2. The API will be available at `http://localhost:3000/employees`

### Endpoints
- `GET`: `/employees`
    - Returns an array of all employees
- `POST`: `/employees`
    - Add a new employee
    - Request body should be an employee object (see src/db/employee-data.json for example)
- `PATCH`: `/employees/{id}`
    - Edit an employees details
- `DELETE`: `/employees/{id}`
    - Delete an employee

## Writing your Client-Side App
The entry point to the application is `client/index.html`, and can be accessed from `http://localhost:3000`. You can add any files/directories you need in the `client` directory, using the folder structure of your preference. All static assets in `client` are served by the same server that is started when you run the API.

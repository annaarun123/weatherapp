## Weather App

> Based on Webpack react minimal boilerplate - https://github.com/HashemKhalifa/webpack-react-boilerplate

> Uses Yahoo Weather API

### Assumptions

## Assumption #1
Best day to sell jacket is the day with the lowest `low`.

## Assumption #2
Looks up a preset label array of values such as "Rainy", "Mostly Cloudy", "Thunderstorms", etc,.. in the predfined order of higher rain chances


### How it works

- Accepts a comma separated city name and state (or country) as text input.
- When user clicks `Forecast` button, invokes Yahoo weather API
- Slices first 5 days from the 10 days returned from Yahoo
- Displays the forecasted weather in a table
- Decides and suggests best day to sell jacket based on the `assumption #1`

- Decides and suggests best day to sell umbrella based on the `assumption #2`
- Suggest the best day for umbrella as the first occurrence of a day with higher rain chances.


### Project structure

````
build/
src/
|- index.jsx _______________________________ # Application entry 
|- App.jsx _________________________________ # Application init
|  |- Containers/
|    |- Weather/ 
|       |- Weather.jsx _______________________ # Main Weather container page
|  |- Components/
|    |- WeatherInput/ 
|       |- WeatherInput.jsx _______________________ # WeatherInput component

webpack
|- paths.js ________________________________ # webpack paths needed
|- webpack.common.js _______________________ # common webpack config
|- webpack.dev.js __________________________ # development config
|- webpack.prod.js _________________________ # production config      
````


### Installation

1- Clone the boilerplate repo

`git clone git@github.com:annaarun123/weatherapp.git`

2- `yarn` or `npm install` to install npm packages

3- start dev server using `yarn start` or `npm start`.

3- build and bundling your resources for production `yarn build`.

4- Unit testing will watch all your changes in the test files as well as create coverage folder for you. 
`yarn test`


### Configuration
* Webpack Config paths based on your file structure you can go to `webpack/paths.js` and modify the source and file names based on your need.
* `webpack/webpack.common.js` config common webpack for both dev and production environments.
* webpack/webpack.dev.js config webpack for dev environment.
* `webpack/webpack.prod.js` config webpack for production environment.
* `/webpack.config.js` main webpack config that merge common and webpack environment based config.
* Enzyme config `/setupTest.js` here you will have all setup for enzyme to test your component.
* Prettier config `/.prettierc`.
* Browsers list config `/.browserslistrc`.


#### Technologies used


* [Webpack 4](https://github.com/webpack/webpack) 
* [Babel 7](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
* [React](https://github.com/facebook/react) `16.4`
* [Lodash](https://github.com/lodash/lodash)
* [Jest](https://github.com/facebook/jest) [ Unit test]
* [Enzyme](http://airbnb.io/enzyme/) for UI testing.
* [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader)
* [CSS modules](https://github.com/css-modules/css-modules) [ Isolated style based on each component ]
* [Browsers list](https://github.com/browserslist/browserslist) [ Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env ]
* [React hot loader](https://github.com/gaearon/react-hot-loader)
* [Webpack serve](https://github.com/webpack-contrib/webpack-serve) [ using web socket ]

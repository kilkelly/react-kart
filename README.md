# ReactKart

ReactKart is a simple game made to improve my React & Redux skills. Choose your kart wisely based on how lucky they are, place a bet and try to increase your Coin Balance!

Play the game!

![ReactKart Select Screen](http://i74.photobucket.com/albums/i265/gardenstew/reactkart-screen-1.png) ![ReactKart Race Results](http://i74.photobucket.com/albums/i265/gardenstew/reactkart-screen-2.png)

### Installation
First install [node.js](http://nodejs.org/). Then:
```sh
npm install
```
### Running in production mode
```sh
npm run start
```
then open [http://localhost:3000/](http://localhost:3000/) in your browser

### Running in development mode
(mostly to allow hot-reloading of React components)
```sh
npm run start:dev
```

### Rebuilding production files
```sh
npm run build
```

Of note in this repo are:

* [`React`](https://github.com/facebook/react) for the view layer.
* [`Redux`](https://github.com/reactjs/redux) to handle our state (organised using [`Ducks: Redux Reducer Bundles`](https://github.com/erikras/ducks-modular-redux). Parts of Redux state tree are saved to local storage.
* [`Immutable.js`](https://facebook.github.io/immutable-js/) data structures.
* [`React Router`](https://github.com/reactjs/react-router) for routing.
* [`CSS Modules`](https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284#.srnlsjycn) for local CSS styling.
* [`Webpack`](https://github.com/webpack) to bundle our client-side code.
* Hot reloading using [`webpack-dev-middleware`](https://github.com/webpack/webpack-dev-middleware) and [`webpack-hot-middleware`](https://github.com/glenjamin/webpack-hot-middleware).
* [`Express`](https://github.com/expressjs/express) for handling server requests (REST and page requests).
* [`Mocha`](https://mochajs.org/) and [`Chai`](http://chaijs.com/) for unit tests.


I learned a lot building this small project because the end result turned out to be fun! Pull requests and comments / issue reports / questions are most welcome. Enjoy and hope the source code helps you!

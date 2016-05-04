"use strict"

import React from "react"

// -------------------------------------------------------------------------------

const About = React.createClass({

	render: function() {
		return (
			<div>
				<p>
					ReactKart is a simple betting game made to 
					improve my React & Redux skills. Choose your kart wisely
					based on how lucky they are and try to increase your Coin
					Balance!
				</p>
				<p>Of note in this repo are:</p>
				<ul>
					<li><a href="https://github.com/facebook/react" target="_blank">React</a> for the view layer.</li>
					<li><a href="https://github.com/reactjs/redux" target="_blank">Redux</a> to handle our state (organised using <a href="https://github.com/erikras/ducks-modular-redux" target="_blank">Ducks: Redux Reducer Bundles</a>. Parts of Redux state tree are saved to local storage.</li>
					<li><a href="https://facebook.github.io/immutable-js/" target="_blank">Immutable.js</a> data structures.</li>
					<li><a href="https://github.com/reactjs/react-router" target="_blank">React Router</a> for routing.</li>
					<li><a href="https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284#.srnlsjycn" target="_blank">CSS Modules</a> for local CSS styling.</li>
					<li><a href="https://github.com/webpack/webpack" target="_blank">Webpack</a> to bundle our client-side code.</li>
					<li>Hot reloading using <a href="https://github.com/webpack/webpack-dev-middleware" target="_blank">webpack-dev-middleware</a> and <a href="https://github.com/glenjamin/webpack-hot-middleware" target="_blank">webpack-hot-middleware</a>.</li>
					<li><a href="https://github.com/expressjs/express" target="_blank">Express</a> for handling server requests.</li>
					<li><a href="https://mochajs.org/" target="_blank">Mocha</a> and <a href="http://chaijs.com/" target="_blank">Chai</a> for unit tests.</li>
				</ul>				
			</div>	
		)
	}

})

export default About
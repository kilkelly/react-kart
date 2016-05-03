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
				<p>
					Of note in this repo are:
					<ul>
						<li>React for the view layer</li>
						<li>
							Redux for managing state (organised using <a href="https://github.com/erikras/ducks-modular-redux" target="_blank">Ducks: Redux Reducer Bundles</a>).
							Parts of the Redux state tree are saved to local storage.
						</li>
						<li>Immutable.js data structures</li>
						<li>React Router for routing</li>
						<li>CSS Modules for styling</li>
						<li>Webpack for bundling</li>
					</ul>
				</p>				
			</div>	
		)
	}

})

export default About
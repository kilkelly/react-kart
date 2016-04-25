"use strict"

import React from "react"
import Navigation from "../Navigation"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const App = React.createClass({

	render: function() {
		return (
			<div>
				<Navigation 
					balance={this.props.balance}
					wins={this.props.wins}
					losses={this.props.losses} />

				{this.props.children}
			</div>
		)		
	}

})

export default App



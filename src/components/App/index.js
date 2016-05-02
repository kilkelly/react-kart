"use strict"

import React from "react"
import Navigation from "../Navigation"
import Footer from "../Footer"
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
				<Footer />
			</div>
		)		
	}

})

export default App



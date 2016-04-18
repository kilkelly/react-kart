"use strict"

import React from "react"
import Navigation from "../Navigation"

// -------------------------------------------------------------------------------

const App = React.createClass({

	render: function() {
		return (
			<div>
				<Navigation />
				{this.props.children}
			</div>
		)		
	}

})

export default App



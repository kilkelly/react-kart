"use strict"

import React from "react"
import ___Navigation from "../../containers/___Navigation"

// -------------------------------------------------------------------------------

const App = React.createClass({

	render: function() {
		return (
			<div>
				<___Navigation />
				{this.props.children}
			</div>
		)		
	}

})

export default App



import React from "react"


const App = React.createClass({

	render: function() {
		return (
			<div>
				{this.props.children}
			</div>
		)		
	}

})

export default App



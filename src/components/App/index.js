import React from "react"


const App = React.createClass({

	render: function() {
		return (
			<div>
				<h1>This is working</h1>
				{this.props.children}
			</div>
		)		
	}

})

export default App



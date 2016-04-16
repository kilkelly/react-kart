import React from "react"


const App = React.createClass({

	render: function() {
		return (
			<div>
				<div className="row">
					<div className="column column-2">
						<h1>ReactKart</h1>
					</div>
					<div className="column column-8">&nbsp;</div>
					<div className="column column-2">
						Coin Balance
					</div>
				</div>
				{this.props.children}
			</div>
		)		
	}

})

export default App



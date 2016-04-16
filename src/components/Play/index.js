"use strict"

import React from "react"
import KartSelectAreaContainer from "../../containers/KartSelectAreaContainer"

const Play = React.createClass({

	render: function() {
		return (
			<div>
				{
					!this.props.currentRace.inProgress
					? <KartSelectAreaContainer />
					: ""
				}
			</div>
		)
	}

})

export default Play
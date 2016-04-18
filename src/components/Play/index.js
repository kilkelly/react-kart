"use strict"

import React from "react"
import RaceSetup from "../RaceSetup"

const Play = React.createClass({

	render: function() {
		return (
			<div>
				{
					!this.props.currentRace.inProgress
					? <RaceSetup />
					: ""
				}
			</div>
		)
	}

})

export default Play
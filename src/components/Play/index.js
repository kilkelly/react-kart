"use strict"

import React from "react"
import Race from "../Race"
import RaceSetup from "../RaceSetup"

const Play = React.createClass({

	render: function() {
		return (
			<div>
				{
					this.props.currentRace.inProgress
					? <Race />
					: <RaceSetup />
				}
			</div>
		)
	}

})

export default Play
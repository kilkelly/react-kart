 "use strict"

import React from "react"
import Race from "../Race"
import RaceSetup from "../RaceSetup"
import styles from "./styles.scss"

const Play = React.createClass({

	componentWillUnmount: function() {		
		this.props.resetRace()
		this.props.moveKartsToStart()
	},

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
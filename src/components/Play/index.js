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
					(this.props.currentRace.inProgress)

					? <Race />

					: <RaceSetup 
						karts={this.props.karts} 
						selectKart={this.props.setSelectedKart}
						selectedKart={this.props.karts[this.props.user.selectedKart]} />
				}
			</div>
		)
	}

})

export default Play
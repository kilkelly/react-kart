"use strict"

import React from "react"
import styles from "./styles.scss"
import RaceLogEntry from "../RaceLogEntry"

// -------------------------------------------------------------------------------
const RaceLog = React.createClass({

	render: function() {

		return (
			<div>
				{this.props.raceLog.map(entry => {
					return <RaceLogEntry entry={entry} karts={this.props.karts}/>
				})}
			</div>			
		)

	}

})

export default RaceLog
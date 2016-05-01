"use strict"

import React from "react"
import { RACE_LOG_SIZE } from "../../core/constants"
import styles from "./styles.scss"
import RaceLogEntry from "../RaceLogEntry"


// -------------------------------------------------------------------------------
const RaceLog = React.createClass({

	render: function() {

		return (
			<div>
				<p>Your last {RACE_LOG_SIZE} races:</p>
				{
				
				this.props.raceLog.length > 0

				? this.props.raceLog.map((entry, index) => {
					return <RaceLogEntry key={index} entry={entry} karts={this.props.karts}/>
				})

				: <p>No races yet!</p> 

				}
			</div>			
		)

	}

})

export default RaceLog
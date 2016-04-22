"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const RaceLogEntry = React.createClass({

	render: function() {

		console.log(this.props.entry.results)

		let resultsDisplay = []
		for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {							
			resultsDisplay.push(<div>
				<img
					className={styles.img}
					src={this.props.karts[this.props.entry.results[i].kartId].image}
					/>
			</div>)
		}	

		console.log(resultsDisplay)

		return (
			<div>
				<div>
					Race #{this.props.entry.raceId}
				</div>
				<div>
					{resultsDisplay}
				</div>			
			</div>	
		)

	}

})

export default RaceLogEntry
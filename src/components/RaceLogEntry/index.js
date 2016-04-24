"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const RaceLogEntry = React.createClass({

	_numberSuffix: function(number) {
		switch(number) {
			case 1: 
				return "st"
			case 2: 
				return "nd"				
			case 3: 
				return "rd"
			default:
				return "th"					
		}
	},

	// -------------------------------------------------------------------------------
	render: function() {

		let kartsDisplay = []
		let resultsDisplay = []

		for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {							
			kartsDisplay.push(				
				<div key={i} className={styles.cell}>
				<img
					className={styles.img}
					src={this.props.karts[this.props.entry.results[i].kartId].image}
					/>
				</div>)
		}

		for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {							
			resultsDisplay.push(				
				<div key={i} className={styles.cell}>
					{i + this._numberSuffix(i)}
				</div>)
		}			

		return (
			<div>
				<div>
					Race #{this.props.entry.raceId}
				</div>
				<div className={styles.table}>
					<div className={styles.row}>
						{kartsDisplay}
					</div>	
					<div className={styles.row}>
						{resultsDisplay}
					</div>
				</div>			
			</div>	
		)

	}

})

export default RaceLogEntry
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

		let wonBet = this.props.entry.betResult > 0
					? true
					: false

		//**
		for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {							

			// is this the kart that the user selected during the race?
			let selected = this.props.entry.selectedKart === this.props.entry.results[i].kartId			

			let kartStyle = styles.kart
			kartStyle += selected ? (" " + styles.selected) : ""								

			kartsDisplay.push(				
				<div key={i} className={styles.cell}>
					<img
						className={kartStyle}
						src={this.props.karts[this.props.entry.results[i].kartId].image}
						/>
				</div>)

			resultsDisplay.push(				
				<div key={i} className={styles.cell}>
					{i + this._numberSuffix(i)}
					{selected ? " (you)" : ""}
				</div>)
		}			
		//*



		return (
			<div id={styles.wrapper}>
				<div>
					Race #{this.props.entry.raceId}
					(<span className={wonBet ? "win" : "lose"}>{this.props.entry.betResult}</span> Coins)
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
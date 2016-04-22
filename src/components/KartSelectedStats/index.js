"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const KartSelectedStats = React.createClass({
	
	render: function() {

		let selectedKart
		let luckyIndex = 0		// shows how lucky this kart is in percentage terms

		for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {

			if (this.props.karts[i].id === this.props.user.selectedKart) {				
				selectedKart = this.props.karts[i]
				if (selectedKart.wins + selectedKart.losses > 0) {
					luckyIndex = Math.floor(selectedKart.wins * 100 / (selectedKart.wins + selectedKart.losses))
				}				
			}
		}

		return (
			<div>
				{
					selectedKart 
	
						? <div className={styles.message}>
							<div>
								<span className={styles.selected}>{selectedKart.name}</span>
							</div>
							<div>Wins: {selectedKart.wins} Losses: {selectedKart.losses}</div>													
							<div>Lucky Index: {luckyIndex}%</div>													
						</div>
	
						: ""
				}
			</div>
		)
	}

})

export default KartSelectedStats
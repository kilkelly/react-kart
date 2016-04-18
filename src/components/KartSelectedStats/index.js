"use strict"

import React from "react"
import { NUMBER_OF_KARTS } from "../../core/constants"
import styles from "./styles.scss"

// -------------------------------------------------------------------------------
const KartSelectedStats = React.createClass({
	
	render: function() {

		let selectedKart		

		for (let i = 1; i <= NUMBER_OF_KARTS; i = i + 1) {
			if (this.props.karts[i].selected) {
				selectedKart = this.props.karts[i]
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
						<div>Wins: {selectedKart.wins}</div>	
						<div>Losses: {selectedKart.losses}</div>													
					</div>
					: ""
				}
			</div>
		)
	}

})

export default KartSelectedStats